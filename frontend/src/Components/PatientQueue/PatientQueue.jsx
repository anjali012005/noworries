import Table from 'react-bootstrap/Table';
import './PatientQueue.css'

function PatientQueue() {
    return (
        <div className='patient-container'>
            <h2>PATIENTS MANAGER</h2>
            <Table responsive="sm" hover className='patient-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Patient Name</th>
                        <th>Token Number</th>
                        <th>Status</th>
                        <th>Mark</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ayush</td>
                        <td>1</td>
                        <td>Called</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarun</td>
                        <td>2</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vinayak</td>
                        <td>3</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Ayush</td>
                        <td>1</td>
                        <td>Called</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarun</td>
                        <td>2</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vinayak</td>
                        <td>3</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Ayush</td>
                        <td>1</td>
                        <td>Called</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarun</td>
                        <td>2</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vinayak</td>
                        <td>3</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Ayush</td>
                        <td>1</td>
                        <td>Called</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarun</td>
                        <td>2</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vinayak</td>
                        <td>3</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Ayush</td>
                        <td>1</td>
                        <td>Called</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarun</td>
                        <td>2</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vinayak</td>
                        <td>3</td>
                        <td>Waiting</td>
                        <td>Completed | Called | Waiting</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default PatientQueue;