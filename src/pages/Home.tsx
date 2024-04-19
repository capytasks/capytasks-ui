import React from 'react';
import '../App.css';
import { getTasks } from '../api';

interface Task {
    id: number;
    name: string;
    description: string;
}

const Home: React.FC = () => {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTasks();
                setTasks(data.tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.name}</strong>: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Home;