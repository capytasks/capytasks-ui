import React from 'react';
import '../App.css';
import { getTasks } from '../api';
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable'; // Import Draggable component and event types from react-draggable
import SideBar from "../components/SideBar";
import Popup from '../components/Popup';

interface Task {
    id: number;
    name: string;
    description: string;
    center_x: number;
    center_y: number;
}

const Home: React.FC = () => {

    const [showPopup, setShowPopup] = React.useState<boolean>(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    const addTask = (name: string, description: string) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[updatedTasks.length] = { ...updatedTasks[updatedTasks.length], name: name, description: description};
            return updatedTasks;
        });
    }

    const [tasks, setTasks] = React.useState<Task[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTasks();
                const tasksWithCoords = data.tasks.map((task: any) => ({ ...task }));
                setTasks(tasksWithCoords);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);

    const handleDrag = (index: number, e: DraggableEvent, data: DraggableData) => {
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = { ...updatedTasks[index], center_x: data.x, center_y: data.y };
            return updatedTasks;
        });
    };

    return (
        <div className="main-wrapper">
            <h2 className='main-wrapper__header'>CapyBoard</h2>
            <div className='main-wrapper__capyboard'>
            <SideBar openPopup={togglePopup}/>
            <ul>
                {tasks.map((task, index) => (
                    <Draggable
                        key={task.id}
                        defaultPosition={{ x: task.center_x, y: task.center_y }}
                        onStop={(e, data) => handleDrag(index, e, data)}
                    >
                        <li>
                            <strong>{task.name}</strong>: {task.description}
                        </li>
                    </Draggable>
                ))}
            </ul>
            </div>
            <Popup show={showPopup} handleClose={togglePopup} onSubmit={addTask}/>
        </div>
    );
};

export default Home;
