import _ from 'lodash';

export default (element1, element2) => {
    const last = _.last([element1, element2]);
    return last;
};