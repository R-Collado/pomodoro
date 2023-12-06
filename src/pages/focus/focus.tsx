import ReverseClock from './components/clock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Timer } from '../../interfaces/timer.interface';

import { toast } from 'sonner';
import { PencilIcon } from '../../assets/svgs/pencil';
import { PlayIcon } from '../../assets/svgs/play';
import { PauseIcon } from '../../assets/svgs/pause';
import { ResetIcon } from '../../assets/svgs/reset';
import { ChevronIcon } from '../../assets/svgs/chevron';

export const Focus = () => {
    const [isClockRunning, setIsClockRunning] = useState(false);
    const [timeProgress, setTimeProgress] = useState(0);
    const [isTaskListOpen, setIsTaskListOpen] = useState(false);
    const [taskList, setTaskList] = useState<string[]>([]);
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    const [areTasksSelected, setAreTasksSelected] = useState(false);

    const { timerName } = useParams();
    const timer: Timer = JSON.parse(
        localStorage.getItem(timerName || '') || '{}'
    );

    const circularProgress = document.querySelector(
        '.circular-progress'
    ) as HTMLElement;

    let progressedTime: number;
    const totalSeconds: number = timer.targetMinutes * 60;
    const progressDegrees: number = 360 / totalSeconds;

    useEffect(() => {
        let progress: any;

        if (isClockRunning) {
            progress = setInterval(() => {
                setTimeProgress((prevState) => {
                    let time = prevState + progressDegrees;
                    progressedTime = time;
                    return time;
                });
                circularProgress.style.background = `conic-gradient(#93d2c2 ${progressedTime}deg, #ededed 0deg)`;

                if (progressedTime >= 360) {
                    stopClock();
                    clearInterval(progress);
                }
            }, 1000);
        }
        return () => clearInterval(progress);
    }, [isClockRunning]);

    useEffect(() => {
        setTaskList(getTaskList());
    }, []);

    useEffect(() => {
        checkSelectedTasksLength();
    }, [selectedTasks]);

    const startClock = () => {
        setIsClockRunning(true);
    };

    const stopClock = () => {
        setIsClockRunning(false);
    };

    const resetClock = () => {
        setIsClockRunning(false);
        setTimeProgress(0);
        circularProgress.style.background = `conic-gradient(#93d2c2 0deg, #ededed 0deg)`;
    };

    const toggleTaskList = () => {
        setIsTaskListOpen(!isTaskListOpen);
        const taskList = document.querySelector('.task-list') as HTMLElement;

        if (taskList.dataset.active === 'true') {
            taskList.dataset.active = 'false';
        } else {
            taskList.dataset.active = 'true';
        }
    };

    const handleTaskSelection = (taskName: string) => {
        if (selectedTasks.includes(taskName)) {
            setSelectedTasks((previousSelected) =>
                previousSelected.filter((data) => data !== taskName)
            );
        } else {
            setSelectedTasks([...selectedTasks, taskName]);
        }
    };

    const checkSelectedTasksLength = () => {
        if (selectedTasks.length > 0) setAreTasksSelected(true);
        else setAreTasksSelected(false);
    };

    const getTaskList = () => {
        return JSON.parse(localStorage.getItem('task-list') || '[]');
    };

    const deleteSelectedTasks = () => {
        selectedTasks.forEach((taskName) => {
            setTaskList((prevState) =>
                prevState.filter((data) => data !== taskName)
            );
        });

        setSelectedTasks([]);
        localStorage.setItem('task-list', JSON.stringify(selectedTasks));
        deselectTasks();
        toast('tasks have been deleted');
    };

    const deselectTasks = () => {
        const tasks = Array.from(
            document.querySelectorAll('.task-list__task__checkbox:checked')
        ) as HTMLInputElement[];
        tasks.forEach((task) => (task.checked = false));
    };

    const addTaskToList = (e: any) => {
        e.preventDefault();
        const taskName: string = e.target[0].value;
        const localStorageTaskList = getTaskList();

        if (taskName.trim() === '') {
            toast.error('tasks must have a name !');
        } else {
            e.target[0].value = '';
            setTaskList([...taskList, taskName]);
            localStorageTaskList.push(taskName);
            localStorage.setItem(
                'task-list',
                JSON.stringify(localStorageTaskList)
            );
            toast(`${taskName} has been added to the tasks list`);
        }
    };

    const handleTimerClick = () => {
        if (isClockRunning) stopClock();
        else startClock();
    };

    return (
        <div className="container" data-type="wide">
            <section className="focus | flex">
                <div>
                    <div
                        className="circular-progress | pointer"
                        onClick={handleTimerClick}
                    >
                        <ReverseClock
                            targetMinutes={timer.targetMinutes}
                            isClockRunning={isClockRunning}
                            timeProgress={timeProgress}
                        />
                    </div>
                    <div className="focus-btns">
                        <button
                            onClick={startClock}
                            disabled={isClockRunning}
                            className="icon-btn"
                        >
                            <PlayIcon className="icon play-icon" />
                        </button>
                        <button
                            onClick={stopClock}
                            disabled={!isClockRunning}
                            className="icon-btn"
                        >
                            <PauseIcon className="icon pause-icon" />
                        </button>
                        <button onClick={resetClock} className="icon-btn">
                            <ResetIcon className="icon reset-icon" />
                        </button>
                    </div>
                </div>
                <div>
                    <div className="task-list | padding-4" data-active="false">
                        <header className="task-list__header">
                            <button
                                className="task-list__trigger"
                                onClick={() => toggleTaskList()}
                            >
                                task manager
                            </button>
                            <ChevronIcon className="icon chevron-icon" />
                        </header>
                        {isTaskListOpen && (
                            <div>
                                <form
                                    className="task-list__add-task"
                                    onSubmit={addTaskToList}
                                >
                                    <input
                                        type="text"
                                        name="task-name"
                                        className="task-list__add-task__input"
                                    />
                                    <div className="task-list__btns | flex">
                                        <button
                                            type="submit"
                                            className="task-list__add-task__btn | button pointer"
                                        >
                                            add task
                                        </button>
                                        {areTasksSelected && (
                                            <button
                                                className="task-list__delete-tasks__btn | button"
                                                type="button"
                                                onClick={deleteSelectedTasks}
                                            >
                                                delete selected
                                            </button>
                                        )}
                                    </div>
                                </form>
                                <div className="task-list__list">
                                    {taskList.map((task, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className="task-list__task | flex"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="isTaskCompleted"
                                                    className="task-list__task__checkbox | pointer"
                                                    onClick={() =>
                                                        handleTaskSelection(
                                                            task
                                                        )
                                                    }
                                                />
                                                <p className="task-list__task__name">
                                                    {task}
                                                </p>
                                                <button
                                                    type="button"
                                                    className="task-list__task__edit-btn | button"
                                                    data-type="transparent"
                                                >
                                                    <PencilIcon className="task-list__task__edit-btn-icon" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
