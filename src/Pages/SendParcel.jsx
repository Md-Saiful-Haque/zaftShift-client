import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const district = useLoaderData()


    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSendParcel = (data) => {
console.log(data)
    }

    return (
        <div className="container mx-auto p-4 md:p-8 max-w-4xl">

            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Send A Parcel</h1>
                <p className="text-lg text-gray-600">Enter your parcel details</p>
            </header>

            <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-6" >

                {/* Parcel Type Radio Buttons */}
                <div className="flex items-center space-x-6 mb-6">
                    {/* Document */}
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            name="parcelType"
                            value="Document"
                            defaultChecked // For visual representation
                            className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-green-400"
                        />
                        <span className="ml-2 text-gray-700">Document</span>
                    </label>
                    {/* Non-Document */}
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            name="parcelType"
                            value="Non-Document"
                            className="form-radio h-5 w-5 text-green-500 border-gray-300 focus:ring-green-400"
                        />
                        <span className="ml-2 text-gray-700">Non-Document</span>
                    </label>
                </div>

                {/* Parcel Details Section (Grid 1x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Parcel Name */}
                    <div>
                        <label htmlFor="parcelName" className="block text-sm font-medium text-gray-700 mb-1">Parcel Name</label>
                        <input
                            type="text"
                            {...register('parcelName')}
                            id="parcelName"
                            placeholder="Parcel Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150"
                        />
                    </div>
                    {/* Parcel Weight */}
                    <div>
                        <label htmlFor="parcelWeight" className="block text-sm font-medium text-gray-700 mb-1">Parcel Weight (KG)</label>
                        <input
                            type="number"
                            {...register('parcelWeight')}
                            id="parcelWeight"
                            placeholder="Parcel Weight (KG)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150"
                        />
                    </div>
                </div>

                {/* Sender and Receiver Details Sections (Main Grid 1x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">

                    {/* --- Sender Details --- */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Sender Details</h2>
                        <div className="space-y-4">
                            {/* Name */}
                            <input type="text" {...register('senderName')} placeholder="Sender Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150" />

                            {/* Address */}
                            <input type="text" {...register('senderAddress')} placeholder="Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150" />

                            {/* Phone No */}
                            <input type="tel" {...register('senderPhoneNo')}  placeholder="Sender Phone No" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150" />

                            {/* District Dropdown */}
                            <select {...register('senderDistrict')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150 bg-white">
                                <option disabled selected>Select your District</option>
                                {
                                    district.data.map(dist => <option>{dist.name}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    {/* --- Receiver Details --- */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Receiver Details</h2>
                        <div className="space-y-4">
                            {/* Name */}
                            <input type="text" {...register('receiverName')} placeholder="Receiver Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150" />

                            {/* Address */}
                            <input type="text" {...register('receiverAddress')} placeholder="Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150" />
                            {/* Contact No */}
                            <input type="tel" {...register('receiverContactNo')} placeholder="Receiver Contact No" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150" />

                            {/* District Dropdown */}
                            <select {...register('receiverDistrict')}  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150 bg-white">
                                <option disabled selected>Receiver District</option>
                                {
                                    district.data.map(dist => <option>{dist.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>

                {/* Instructions Textareas (Grid 1x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {/* Pickup Instruction */}
                    <textarea
                        placeholder="Pickup Instruction"
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150"
                    ></textarea>
                    
                    {/* Delivery Instruction */}
                    <textarea
                        placeholder="Delivery Instruction"
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:border-green-400 outline-none transition duration-150"
                    ></textarea>
                </div>

                {/* Pickup Time Note */}
                <p className="text-sm text-gray-500 mt-4">* PickUp Time 4pm-7pm Approx.</p>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 mt-6 text-lg font-semibold text-gray-900 bg-primary rounded-lg hover:bg-lime-500 transition duration-150 shadow-md hover:shadow-lg"
                >
                    Proceed to Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default SendParcel;