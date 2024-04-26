import React, { FC } from 'react';

interface GenderCheckBoxProps {
    onGenderCheck: (gender: string) => void;
    selectedGender: string;
}

const GenderCheckBox: FC<GenderCheckBoxProps> = ({ onGenderCheck, selectedGender }) => {
    return (
        <div className='flex mt-2'>
            <div className="form-control">
                <label className="cursor-pointer label gap-2    ">
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-info"
                        checked={selectedGender === "male"}
                        onChange={() => { onGenderCheck("male") }}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-info"
                        checked={selectedGender === "female"}
                        onChange={() => { onGenderCheck("female") }}
                    />
                </label>
            </div>
        </div>
    );
}

export default GenderCheckBox;