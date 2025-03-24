import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {

    const filterOptions = [
        {value:'all',label:'All'},
        {value:'no-discount',label:'No Discount'},
        {value:'with-discount',label:'With Discount'},
    ]

    const sortOptions = [
        {value:'name-asc',label:'Sort by Name (A-Z)'},
        {value:'name-desc',label:'Sort by Name (Z-A)'},
        {value:'regularPrice-asc',label:'Sort by Price (low first)'},
        {value:'regularPrice-desc',label:'Sort by Price (high first)'},
        {value:'maxCapacity-asc',label:'Sort by Capacity (low first)'},
        {value:'maxCapacity-desc',label:'Sort by Capacity (high first)'},
    ]

    return (
        <TableOperations>
            <Filter filterField='discount' options={filterOptions} />
            <SortBy options={sortOptions}></SortBy>
        </TableOperations>
    )
}

export default CabinTableOperations
