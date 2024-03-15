const Table = () => {
  return (
    <div className="w-full h-full">
        <table className="w-full h-full bg-transparent mt-2">
            <thead>
                <tr className="text-gray-400">
                    <th><h1>SSN</h1></th>
                    <th><h1>Name</h1></th>
                    <th><h1>Phone Number</h1></th>
                    <th><h1>Status</h1></th>
                </tr>
            </thead>
            <tbody >
                <tr className="text-center">
                    <td>123-45-6789</td>
                    <td>Jerome Bell</td>
                    <td>(225) 555-0118</td>
                    <td className="flex justify-center items-center h-full"><a href="" className="text-center w-28 bg-[#00B087] p-2 rounded-lg text-white">
                            <span>Accepted</span>
                        </a>
                    </td>
                </tr>
                <tr className="text-center">
                    <td>987-65-4321</td>
                    <td>Kathryn Murphy</td>
                    <td>(205) 555-0100</td>
                    <td className="flex justify-center items-center h-full"><a href="" className="text-center w-28 bg-[#E40909] p-2 rounded-lg text-white">
                            <span>Denied</span>
                        </a>
                    </td>
                </tr>
                <tr className="text-center">
                    <td>555-12-3456</td>
                    <td>Jacob Jones</td>
                    <td>(302) 555-0107</td>
                    <td className="flex justify-center items-center h-full"><a href="" className="text-center w-28 bg-orange-400 p-2 rounded-lg text-white">
                            <span>In progress</span>
                        </a>
                    </td>
                </tr>
                <tr className="text-center">
                    <td>654-32-1098</td>
                    <td>Kristin Watson</td>
                    <td>(252) 555-0126</td>
                    <td className="flex justify-center items-center h-full"><a href="" className="text-center w-28 bg-[#00B087] p-2 rounded-lg text-white">
                            <span>Accepted</span>
                        </a>
                    </td>
                </tr>
                <tr className="text-center">
                    <td>876-54-3210</td>
                    <td>Floyd Miles</td>
                    <td>(629) 555-0129</td>
                    <td className="flex justify-center items-center h-full"><a href="" className="text-center w-28 bg-[#00B087] p-2 rounded-lg text-white">
                            <span>Accepted</span>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table;
