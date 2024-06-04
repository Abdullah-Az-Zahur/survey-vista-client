
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSurvey = () => {
    const axiosPublic = useAxiosPublic();

    const {data: surveys = [], isPending: loading, refetch} = useQuery({
        queryKey: ['surveys'],
        queryFn: async()=> {
            const res = await axiosPublic.get('/survey');
            return res.data;
        }
    })

    return [surveys, loading, refetch];
};

export default useSurvey;