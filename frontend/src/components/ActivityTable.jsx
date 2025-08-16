import { useState, useEffect } from "react";

function ActivityTable() {
  const activities = [
    { activity: "Added Student", by: "Admin Y", date: "6 June 2025" },
    { activity: "Created Batch", by: "Admin X", date: "5 June 2025" },
    { activity: "Generated Report", by: "Admin X", date: "4 July 2025" },
    { activity: "Updated Project List", by: "Admin Z", date: "10 Aug 2025" },
    { activity: "Deleted Student", by: "Admin Y", date: "12 Aug 2025" },
  ];

  const [displayData, setDisplayData] = useState(activities);

  useEffect(() => {
    const interval = setInterval(() => {
      // डेटा को shuffle या rotate करो
      setDisplayData(prevData => {
        const newData = [...prevData];
        newData.unshift(newData.pop()); // आखिरी को ऊपर लाना
        return newData;
      });
    }, 3000); // हर 3 सेकंड में बदलना

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="activity">
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>By</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((item, index) => (
            <tr key={index}>
              <td>{item.activity}</td>
              <td>{item.by}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ActivityTable;
