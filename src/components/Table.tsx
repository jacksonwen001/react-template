import React, { ReactNode } from 'react';
export interface TableProps {
    title: string,
    key: string, 
    render?: (v: any) => ReactNode
}

const Table = (props: {
    columns: TableProps[]
    dataSource: any[]
}) => {

    return (
        <table className='border-collapse w-full transition-opacity delay-150 '>
            <thead>
                <tr>
                    {props.columns.map(it => (
                        <th key={it.key} className='min-w-[120px] h-12 font-semibold align-center text-left text-xs text-gray-500 select-none border-solid border-b border-gray-200 first:pl-5 last:pr-5 p-3'>{it.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    props.dataSource.map((it, index) => (
                        <tr key={index} className={`${index}`}>
                            {props.columns.map((column, index) => (
                                <td  key={index} className='min-w-[120px] h-15 break-words outline-0 border-solid border-b  border-gray-200 p-3 align-middle text-left text-xs text-gray-900 first:pl-5 last:pr-5'>
                                    {column.render ? column.render(it) : it[column.title]}
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>


    );
}

export default Table;
