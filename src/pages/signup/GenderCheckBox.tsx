import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex mt-2'>
            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox