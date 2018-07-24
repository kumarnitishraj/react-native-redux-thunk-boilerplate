import React, {Component} from 'react';
import {
    StyleSheet, 
    Platform,
    ListView, 
    View,
    Text
} from 'react-native';
import { connect } from "react-redux";

import Header from '../../Components/Hadder';
import Card from '../../Components/Card';
import { getPostsAPI } from '../../redux/actions/post'
import { Colors } from '../../config'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Home extends Component{

    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        const { getPostsAPI } = this.props;
        getPostsAPI();
    }

    render() {
        const { Post } = this.props;

        return (
            <View style={styles.container}>
                {Platform.OS === 'ios'?
                    <View style={{marginTop:20}} />
                :null
                }
                <Header text = {'Posts'} />
                <View style = {styles.cardContainer} >
                    { !!Post.data?
                        <ListView
                            dataSource={ds.cloneWithRows(Post.data)}
                            renderRow={(rowData) => <Card data = {rowData}/>}
                        />
                        
                    :
                        <Text> Loading </Text>
                    }
                </View>
                
            </View>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        Post: state.Post,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPostsAPI: () => {
            dispatch(getPostsAPI())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.CONTAINER_BACKGROUND,
    },
    cardContainer:{
        marginTop:5,
    }
});
