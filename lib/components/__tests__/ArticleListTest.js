import React from 'react';
import ArticleList from '../ArticleList';
import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../Article'

configure({ adapter: new Adapter() });

describe('ArticleList', () =>{
const testProps = {
    articles : {
        a:{id:'a', date :'b'},
        b:{id:'b', date:'c'}
    }
};
    it('renders correctly', () => {
const wrapper = shallow(
    <ArticleList
        {...testProps}
    />
    );

    Article.propTypes ={};

    expect(wrapper.find('Article').children).toBe(2);
    expect(wrapper).toMatchSnapshot();


    });
});
