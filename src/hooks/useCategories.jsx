import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { axiosInstance } from '../api/axiosInstance';

export default function useCategories() {
    
        const getCategories = async ()=>{
           
            const respons = await axiosInstance(`/Categories`,{
            
            });
            return respons.data;
        }
          const query = useQuery({
                queryKey:['categories'],
                queryFn:getCategories,
                staleTime:1000 * 60 * 5
            })
  return query
}
