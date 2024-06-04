
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSurvey = () => {
    const axiosPublic = useAxiosPublic();

    const {data: survey = [], isPending: loading, refetch} = useQuery({
        queryKey: ['survey'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/survey');
            return res.data;
        }
    })

    return [survey, loading, refetch];
};

export default useSurvey;