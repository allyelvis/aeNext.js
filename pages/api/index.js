mport { useState } from 'react';
import Facture from '../models/Facture';

export default function Home() {
        const [invoiceNumber, setInvoiceNumber] = useState('');
            const [date, setDate] = useState('');
                const [items, setItems] = useState([{ description: '', quantity: '', price: '' }]);
                    const [totalAmount, setTotalAmount] =   <div>
                                            <label>Date:</label>
                                                                <input
                                                                                        type="date"
                                                                                                              laceholder="Description"
                                                                                                                                              value={items.description}
                                                                                                                                                                              onChange={(e) => handleItemChange(index, e)}
                                                                                                                                                                                                          />
                                                                                                                                                                                                                                      <input
                                                                                                                                                                                                                                                                      type="number"
                                                                                                                                                                                                                                                                                                      name="quantity"
                                                                                                                                                                                                                                                                                                                                      p               <input
                                                                                                                                                                                                                                                                                                                                                                      type="number"
                                                                                                                                                                                                                                                                                                                                                                                                      name="price"
                                                                                                                                                                                                                                                                                                                                                                                                                                      placeholder="Price"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      value={items.price}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      onChange={(e) => handleItemChange(index, e)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}