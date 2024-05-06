import './YourOrders.css'

const YourOrders = () => {
    const data = [
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Delivered',
            total: 500
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Delivered',
            total: 200
        },
        {
            id: 112345,
            date: '12/12/2021',
            status: 'Delivered',
            total: 100
        },
        {
            id: 112347,
            date: '12/12/2021',
            status: 'Delivered',
            total: 200
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'Cancelled',
            total: 100
        }
    ]
    return (
        <div className="yourorders">
            <h1 className='mainhead1'>Your Orders</h1>
            <table className='yourorderstable'>
                <tr>
                        <th scope='col'>Oder ID</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Total</th>
                        <th scope='col'>Invoice</th>
                </tr>
                <thead>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='OrderID'>{item.id}</td>
                                <td data-label='OrderDate'>{item.date}</td>
                                <td data-label='Delivery Status'>
                                    <div>
                                        {item.status == 'Delivered' && <span className='greendot'></span>}
                                        {item.status == 'On the way' && <span className='yellowdot'></span>}
                                        {item.status == 'Cancelled' && <span className='reddot'></span>}
                                        {item.status}
                                    </div>
                                </td>
                                <td data-label='Total'>Rp.{item.total}.000</td>
                                <td data-label='Invoice'>
                                    <button className='mainbutton1'
                                        onClick={() => {
                                            setselectedorderid(item.id)
                                            setordersuccesscont(true)
                                        }}
                                    >View</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default YourOrders;