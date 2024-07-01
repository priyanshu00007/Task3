import React from 'react'

const UserTables = () => {
  return (
    <div>
        <table className='m-5 bg-blue-200 max-w-fit'>
            <thead  >
                <tr >
                    <th className='p-5'>Broker</th>
                    <th className='p-5'>No. of active position</th>
                    <th className='p-5'>Available Capital</th>
                    <th className='p-5'> Total Deployed Stratergies</th>
                    <th className='p-5'>Active Stratergies</th>
                    <th className='p-5'>Status</th>
                    <th className='p-5'>Current P & L</th>
                    <th className='p-5'>Require Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-10 pt-0 text-center'>Zerodha(DU00004)</td>
                    <td className='p-10 pt-0 text-center'>1</td>
                    <td className='p-10 pt-0 text-center'>$1.54CR</td>
                    <td className='p-10 pt-0 text-center'>3</td>
                    <td className='p-10 pt-0 text-center'>1</td>
                    <td className='p-10 pt-0 text-center'>Active</td>
                    <td className='p-10 pt-0 text-center'>$50.20k</td>
                    <td className='p-10 pt-0 text-center'>$50.20k</td>
                   
                    </tr>
                <tr>
                    <td className='p-10 pt-0 text-center'>Angel one(MNBN1026)</td>
                    <td className='p-10 pt-0 text-center'>1</td>
                    <td className='p-10 pt-0 text-center'>$1.54CR</td>
                    <td className='p-10 pt-0 text-center'>3</td>
                    <td className='p-10 pt-0 text-center'>1</td>
                    <td className='p-10 pt-0 text-center'>Active</td>
                    <td className='p-10 pt-0 text-center'>$50.20k</td>
                    <td className='p-10 pt-0 text-center'>$50.20k</td>
                   
                    </tr>
                <tr>
                    <td className='p-10 pt-0 text-center'>Zerodha(DU00004)</td>
                    <td className='p-10 pt-0 text-center'>1</td>
                    <td className='p-10 pt-0 text-center'>$1.54CR</td>
                    <td className='p-10 pt-0 text-center'>3</td>
                    <td className='p-10 pt-0 text-center'>1</td>
                    <td className='p-10 pt-0 text-center'>Active</td>
                    <td className='p-10 pt-0 text-center'>$50.20k</td>
                    <td className='p-10 pt-0 text-center'>$50.20k</td>
                   
                    </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UserTables