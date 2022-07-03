import React, { useState } from 'react';
import {FlatList, RefreshControl, SectionList, Text, View} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';

const dataItems = [
  {
    id: '12',
    name: 'lavi',
    title: 'ratsogi',
    job: 'ibm',
    Sector: 'Buisness',
  },
  {
    id: '13',
    name: 'lavi1',
    title: 'ratsogi1',
    job: 'ibm1',
    Sector: 'Medical',
  },
  {
    id: '14',
    name: 'lavi4',
    title: 'ratsogi4',
    job: 'ibm4',
    Sector: 'Buisness',
  },
  {
    id: '15',
    name: 'lavi5',
    title: 'ratsogi5',
    job: 'ibm5',
    Sector: 'Stoxks',
  },
  {
    id: '16',
    name: 'lavi6',
    title: 'ratsogi6',
    job: 'ibm6',
    Sector: 'IT',
  },
  {
    id: '17',
    name: 'lav7',
    title: 'ratsogi7',
    job: 'ibm7',
    Sector: 'IT',
  },
];

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const nestedList = [
  {
    title: 'IT',
    data: [
      {
        id: '16',
        name: 'lavi6',
        title: 'ratsogi6',
        job: 'ibm6',
        Sector: 'IT',
      },
      {
        id: '17',
        name: 'lav7',
        title: 'ratsogi7',
        job: 'ibm7',
        Sector: 'IT',
      },
    ],
  },
  {
    title: 'BUISNESS',
    data: [
      {
        id: '18',
        name: 'lavi9',
        title: 'ratsogi9',
        job: 'ibm9',
        Sector: 'BUISNESS',
      },
    ],
  },
  {
    title: 'STOCKS',
    data: [
      {
        id: '177',
        name: 'lavi88',
        title: 'ratsogi88',
        job: 'ibm88',
        Sector: 'STOCKS',
      },
      {
        id: '178',
        name: 'lav78',
        title: 'ratsogi778',
        job: 'ibm78',
        Sector: 'STOCKS',
      },
    ],
  },
];

const HeadTable = ['NAME', 'Title', 'JOB', 'SECTOR'];

function ListArray() {
    const [refreshing, setRefreshing] = useState(false);
    
const DataConstruct = () => {
    return dataItems.map(ele => [ele.name, ele.title, ele.job, ele.Sector]);
  };
  
  const DataTable = DataConstruct();
  
  const constructTable = () => {
    return (
      <View>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={HeadTable} />
          <Rows data={DataTable} />
        </Table>
      </View>
    );
  };
  
  const ItemRender = ItemVAL => {
    return (
      <View>
        <Text>{ItemVAL.name} </Text>
        <Text>{ItemVAL.title}</Text>
        <Text>{ItemVAL.job}</Text>
        <Text> </Text>
      </View>
    );
  };
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
  const constructListArray = () => {
    return (
      <FlatList
        data={dataItems}
        // in render we get the object in item which we need to destructure.
        renderItem={({item}) => ItemRender(item)}
        //to add keys into it and in react native keys are in  string
        extraData={item => item.id}
        // here we can write Any logic on refersh
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    );
  };
  // construct section list
  const constructSectionListArray = () => {
    return (
      <SectionList
        sections={nestedList}
        // in render we get the object in item which we need to destructure.
        renderItem={({item}) => ItemRender(item)}
        //   //to add keys into it and in react native keys are in  string
        extraData={item => item.id}
        //display title then 2 array data will be displayed and so on
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    );
  };

  return (
    <>
      {/* in React native we can also use map along with view and all but u have to add scrollview 
      AND also they have a very good flat list and section list for it 
    */}
      {/* construct table */}
      {/* {constructTable()} */}

      {/* in both section list or flat list we can add refersh */}
      {/* Flat List array  */}
      {constructListArray()}

      {/* section list when i need to display scroll also we can ADD REFERSH VALA*/}
      {/* in section array everything should be in  in data and title only very imp else error comes */}
      {constructSectionListArray()}
    </>
  );

  //<FlatList data={dataItems} renderItem />;
}

export default ListArray;
