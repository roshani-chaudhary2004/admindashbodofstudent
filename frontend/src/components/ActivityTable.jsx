function ActivityTable() {
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
          <tr>
            <td>Added Student</td>
            <td>Admin Y</td>
            <td>6 June 2025</td>
          </tr>
          <tr>
            <td>Created Batch</td>
            <td>Admin X</td>
            <td>5 June 2025</td>
          </tr>
          <tr>
            <td>Generated Report</td>
            <td>Admin X</td>
            <td>4 July 2025</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ActivityTable;
