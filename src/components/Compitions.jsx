import React, { useState } from 'react'
import "./Compitions.css"
import axios from "axios";
import * as XLSX from "xlsx";

const Compitions = () => {

    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    
    return (
        <div>


            <div className='create'>


                <div>
                    <h1>
                        Create Compitions
                    </h1>
                </div>

                <div>
                    <button>
                        Publish
                    </button>
                </div>

            </div>


            <div className="file-upload-section">
                <h3>Upload Excel File</h3>
                <div className="file-upload-container">
                    <input type="file" accept=".xlsx,.xls" className="file-input" />
                    <div className="upload-icon">📊</div>
                    <p>Choose Excel file or drag & drop</p>
                </div>
            </div>




        </div>
    )
}

export default Compitions