import React from 'react'
import "../styles/displayMails.scss"

function DisplayMailsPage() {
    return (
        <div className="displayMails">
            <h2>Mails</h2>
            <table>
                <tr>
                    <th>Mail</th>
                    <th>Receipt date</th>
                    <th>Mail date</th>
                    <th>Registration date</th>
                    <th>Objet</th>
                    <th>Priorite</th>
                </tr>
                <tr>
                    <td>Row 1, Column 1</td>
                    <td>Row 1, Column 2</td>
                    <td>Row 1, Column 2</td>
                    <td>Row 1, Column 2</td>
                    <td>Row 1, Column 2</td>
                    <td>Row 1, Column 2</td>
                </tr>
                
                <tr>
                    <td>Row 2, Column 1</td>
                    <td>Row 2, Column 2</td>
                    <td>Row 2, Column 2</td>
                    <td>Row 2, Column 2</td>
                    <td>Row 2, Column 2</td>
                    <td>Row 2, Column 2</td>    
                </tr>
            </table>
        </div>
    )
}

export default DisplayMailsPage
