import React from 'react';
import { useState } from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import CouponItem from './CouponItem';
import CouponsHeader from './CouponsHeader';
import { useEffect } from 'react';
import DeleteBar from '../Category/DeleteBar';
import { useItem } from '../../../../contexts/ItemContext';
import Loading from '../../../Loading/Loading';

const Coupons = () => {

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])

    const {coupons, allcoupons, setCoupons, couponLoading, setCouponLoading} = useItem()

    useEffect(() => {
        if(selected.length < coupons.length){
            setIsAllChecked(false)
        }
        else if(selected.length === coupons.length){
            setIsAllChecked(true)
        }
        if(selected.length > 0){
            setDeselectAll(false)
        }
        else if(selected.length === 0){
            setDeselectAll(true)
        }
    }, [selected, coupons.length])

    const handleBulkDelete = () => {
        setCouponLoading(true)
        const selectedIds = selected.map(item => item._id) 
        fetch(`https://pickbazar-clone.herokuapp.com/deleteBulkCoupon/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedIds)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const newList = coupons.filter(item => {
                    let deleteItem = selected.find(item2 => item._id === item2._id)
                    return deleteItem? false: true
                })
                setCoupons(newList)
            }
            resetSelection()
            setCouponLoading(false)
        })
        .catch(e => {
            alert(e.message)
        })
    }

    const handleSingleDelete = (id) => {
        setCouponLoading(true)
        fetch(`https://pickbazar-clone.herokuapp.com/deleteCoupon/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setCoupons(coupons.filter(item => item._id !== id))
                resetSelection()
            }
            setCouponLoading(false)
        })
        .catch(e => {
            alert(e.message)
        })
    }
    
    const handleAll = (e) => {
        if(e.target.checked){
            setIsAllChecked(true)
            setDeselectAll(false)
        }
        else{
            setIsAllChecked(false)
            setDeselectAll(true)
        }
    }

    const resetSelection = () => {
        setDeselectAll(true)
        setSelected([])
        setIsAllChecked(false)
    }

    const couponFilter = (value, query) => {
        setCouponFilterState(value)
        if(search && query){
            let newList = handleSearchWithValue(search)
            if(value === "all"){
                setCoupons(newList)
            }
            else{
                newList = newList.filter(item => item.status === value)
                setCoupons(newList)
            }
        }
        else if(value === 'all'){
            setCoupons(allcoupons)
        }
        else{
            const newList = allcoupons.filter(item => item.status === value)
            setCoupons(newList)
        }
        resetSelection()
    }

    const handleSearchWithValue = (value) => {
        let newList = allcoupons.slice()
        const word = value
        newList = newList.filter(item => {
            const arr = item.name.toLowerCase().split(" ")
            const match = arr.find(item2 => item2 === word.toLowerCase() || item2.startsWith(word))
            return match ? true : false
        })
        return newList
    }

    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("")
    const [couponFilterState, setCouponFilterState] = useState(false)
    const handleSearch = (e) => {
        if(e.target.value === ""){
            setSearch(null)
            if(couponFilterState){
                couponFilter(couponFilterState, false)
            }
            else{
                setCoupons(allcoupons.slice())
            }
            resetSelection()
        }
        else if(e.which === 13){
            setSearch(e.target.value)
            let newList = allcoupons.slice()
            const word = e.target.value
            newList = newList.filter(item => {
                const arr = item.name.toLowerCase().split(" ")
                const match = arr.find(item2 => item2 === word.toLowerCase() || item2.startsWith(word))
                return match ? true : false
            })
            setCoupons(newList)
            setStatusFilter("")
            setCouponFilterState("")
            resetSelection()
        }
    }

    useEffect(() =>{
        setCouponFilterState("")
        setCoupons(allcoupons)
    },[allcoupons, setCoupons])

    return (
        <AdminLayout>
            <Loading loading={couponLoading}></Loading>
            <div className="admin-coupon admin container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <CouponsHeader 
                            statusFilter={statusFilter}
                            setStatusFilter={setStatusFilter}
                            couponFilter={couponFilter}
                            handleSearch={handleSearch}
                        />
                    </div>
                    {
                        selected.length > 0 &&
                        <div className="col-lg-12 mt-3" style={{padding:0}}>
                            <DeleteBar
                                handleBulkDelete={handleBulkDelete}
                            />
                        </div>
                    }
                    {
                        coupons.length === 0 && !couponLoading &&
                        <h1 className="col-md-12 mt-4 text-center">No coupons found</h1>
                    }
                    {
                        coupons.length > 0 &&
                        <div className="col-lg-12 admin-products-body mt-5">
                            <div className="table-responsive">
                                <table className="table bg-white border table-borderless">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" className="mt-2 ml-2" checked={isAllChecked} onChange={handleAll} name="coupon-item" value={coupons}/>
                                            </th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Campaigns Name</th>
                                            <th scope="col">Code</th>
                                            <th scope="col">Remaining Coupon</th>
                                            {/* <th scope="col">Expiration Date</th> */}
                                            <th scope="col">Creation Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            coupons.map((coupon,index) => (
                                                <CouponItem 
                                                    key={index}
                                                    coupon={coupon}
                                                    coupons={coupons}
                                                    isAllChecked={isAllChecked} 
                                                    setSelected={setSelected} 
                                                    deselectAll={deselectAll}
                                                    selected={selected}
                                                    handleSingleDelete={handleSingleDelete}
                                                    index={index}
                                                />)
                                            )
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    }
                </div>
            </div>
        </AdminLayout>
    );
};

export default Coupons;