let table = $("#table");
for (let index = 0; index < 300; index++) {
    table.append(`
        <tr>
            <td>Name${index}</td>
            <td>rs${index}</td>
            <td>action${index}</td>
        </tr>
    `);  
}