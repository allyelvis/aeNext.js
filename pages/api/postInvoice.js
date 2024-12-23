
export default async function handler(req, res) {

    if (req.method === 'POST') {

        const facture = req.body;



        const response = await fetch('https://ebms.obr.gov.bi:9443/ebms_api/addInvoice', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json',

                'Authorization': \Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndzNDAwMDk5Mjg3NzAwNzEyIiwiZXhwIjoxNzE0OTc2ODIzfQ.PrvIEGOqXM0Co30JAG9amORMVRvIGG2Sl9XM7iSyfV0\

            },

            body: JSON.stringify(facture),

        });



        if (response.ok) {

            res.status(200).json({ message: 'Invoice submitted successfully' });

        } else {

            res.status(500).json({ message: 'Failed to submit invoice' });

        }

    } else {

        res.status(405).json({ message: 'Method Not Allowed' });

    }

}

