import React, { useEffect, useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Table.css';

let store = {
    headerOffset: null
};

let cols = [
    {
        label: "Order Number"
    },
    {
        label: "Name"
    },
    {
        label: "Details"
    },
    {
        label: "State"
    }
]


function RowItem(props) {

    const toggleRow = (id) => {
        let tempArr = [...props.dummyData]
        tempArr.forEach((key) => {
            if (key.id === id) {
                key.rowExpanded = !key.rowExpanded
            } else {
                key.rowExpanded = false
            }
            props.setUpdatedData(tempArr);
        });
    }

    let classes = '';
    if (props.rowExpanded) {
        classes = 'open';
    }

    return (
        <li onClick={() => toggleRow(props.id)} className={classes}>
            <div className="heading">
                <div className="col">{props.id}</div>
                <div className="col">{props.name}</div>
                <div className="col">{props.details}</div>
                <div className="col">{props.state}</div>
            </div>
            <RowContent open={props.rowExpanded} />
            {props.children}
        </li>
    )

};


function RowContent(props) {

    let jsxhtml = (<div className="content">
        row content
        {props.children}
    </div>);

    if (props.open) {
        jsxhtml = (<div className="content open">
            row content
            <a href='/' target='_blank'><div className="col" onClick={(e) => e.stopPropagation()}>Click me</div></a>
            {props.children}
        </div>);
    }

    return (
        <div>
            {jsxhtml}
        </div>
    )

};


function Table(props) {
    const headerRef = useRef(null);
    useEffect(() => {
        // THIS SEEMS THE ONLY PLACE WE CAN PICK UP THE REF FOR THE HEADER
        store.headerOffset = ReactDOM.findDOMNode(headerRef.current).getBoundingClientRect().top;
    }, [])

    let columns = props.columns.map((item, inx) => {
        return (<HeaderColumn label={item.label} />);
    });

    //go through the rows
    let rows = props.data.map((item, inx) => {
        return (<RowItem {...item} dummyData={props.data} setUpdatedData={props.setUpdatedData}></RowItem>);
    });

    let classes = 'header';
    if (props.headerFixed) {
        classes = 'header fixed';
    }

    return (
        <div className="table">
            {props.children}
            <div className={classes} ref={headerRef}>
                {columns}
                <div className="shadow"></div>
            </div>
            <ul>{rows}</ul>
        </div>
    );

}

function HeaderColumn(props) {
    return (<div className="hcol">{props.label}</div>);
}


export default function TableDumb() {
    const [tableHeaderFixed, setTableHeaderFixed] = useState(false);
    const [data, setData] = useState([
        {
            id: 0,
            name: "name 0",
            details: "details 0",
            state: "live",
            rowExpanded: false
        },
        {
            id: 1,
            name: "name 1",
            details: "details 1",
            state: "live",
            rowExpanded: false
        },
        {
            id: 2,
            name: "name 2",
            details: "details 2",
            state: "draft",
            rowExpanded: false
        },
        {
            id: 3,
            name: "name 3",
            details: "details 3",
            state: "live",
            rowExpanded: false
        },
        {
            id: 4,
            name: "name 4",
            details: "details 4",
            state: "live",
            rowExpanded: false
        },
        {
            id: 5,
            name: "name 5",
            details: "details 5",
            state: "live",
            rowExpanded: false
        },
        {
            id: 6,
            name: "name 6",
            details: "details 6",
            state: "live",
            rowExpanded: false
        },
        {
            id: 7,
            name: "name 7",
            details: "details 7",
            state: "live",
            rowExpanded: false
        },
        {
            id: 8,
            name: "name 8",
            details: "details 8",
            state: "live",
            rowExpanded: false
        },
        {
            id: 9,
            name: "name 9",
            details: "details 9",
            state: "live",
            rowExpanded: false
        },
        {
            id: 10,
            name: "name 10",
            details: "details 10",
            state: "live",
            rowExpanded: false
        }
    ])

    const handleScroll = useCallback(e => {
        let scrollTop = e.srcElement.body.scrollTop;

        //HOW DO WE GET THE REFS HERE FOR THE ITEM OFFSET?

        if (scrollTop >= store.headerOffset) {
            setTableHeaderFixed(true);
        } else {
            setTableHeaderFixed(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll])

    const setUpdatedData = (updatedData) => {
        setData(updatedData);
    }

    return (
        <div className="container">
            <Table data={data} columns={cols} headerFixed={tableHeaderFixed} setUpdatedData={setUpdatedData} />
        </div>
    )

};