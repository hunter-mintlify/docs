export const FruitTable = ({ rows }) => (
  <table>
    <thead>
      <tr>
        <th>Fruit</th>
        <th>Family</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.name}>
          <td><a href={row.docs}>{row.name}</a></td>
          <td>{row.family}</td>
          <td>{row.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
