import Table from 'react-bootstrap/Table';

function PatientQueue() {
    return (
        <div className=''>
            <h2>PATIENTS MANAGER</h2>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Patient Name</th>
                        <th>Token Number</th>
                        <th>Status</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ayush</td>
                        <td>1</td>
                        <td>Called</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarun</td>
                        <td>2</td>
                        <td>Waiting</td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vinayak</td>
                        <td>3</td>
                        <td>Waiting</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default PatientQueue;