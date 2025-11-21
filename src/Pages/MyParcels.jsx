import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyParcels = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: parcels = []} = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            MyParcels
        </div>
    );
};

export default MyParcels;