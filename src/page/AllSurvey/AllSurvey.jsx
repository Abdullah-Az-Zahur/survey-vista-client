import React from 'react';
import useSurvey from '../../hooks/useSurvey';

const AllSurvey = () => {
    const [survey] = useSurvey();
    return (
        <div>
            <h2>All Survey</h2>
            <p>{survey.length}</p>
        </div>
    );
};

export default AllSurvey;