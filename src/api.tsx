
export async function getTasks() {
    try {
      const response = await fetch('http://localhost:3000/assets/sample-tasks.json');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

