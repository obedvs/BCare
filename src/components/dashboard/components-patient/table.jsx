const Table = () => {
  return (
    <div className="w-full h-full">
        <table className="w-full h-auto bg-transparent mt-2  rounded-xl overflow-hidden">
            <thead>
                <tr className="text-white bg-[#7747E3]">
                    <th><h1 className="py-2">Date</h1></th>
                    <th><h1>Procedure</h1></th>
                    <th><h1>Analysis</h1></th>
                </tr>
            </thead>
            <tbody >
                <tr className="text-center">
                    <td className="py-2">2023-09-20</td>
                    <td>Chemotherapy</td>
                    <td>Blood</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table;
