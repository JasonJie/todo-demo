



import React, { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FilterEnum } from "../../../store/interface";
import { todoListByFiter } from "../../../store/selector";
import { filterState } from "../../../store/atom";

export interface filterType {
    filterName: FilterEnum;
    filterUrl: string;
}

const filters: filterType[] = [
    {
        filterName: FilterEnum.All,
        filterUrl: "#/",
    },
    {
        filterName: FilterEnum.Active,
        filterUrl: "#/active",
    },
    {
        filterName: FilterEnum.Completed,
        filterUrl: "#/completed",
    },
];
const TodoFooterComponent: React.FC = () => {
    const todoList = useRecoilValue(todoListByFiter);

    const setFilter = useSetRecoilState(filterState);

    const clickChangeFilter = useCallback(
        (filter: FilterEnum) => {
            setFilter(filter);
        },
        [setFilter]
    );

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todoList.length}</strong> item
            </span>
            <ul className="filters">
                {filters.map((filter) => {
                    return (
                        <li key={filter.filterName}>
                            <a
                                className="selected"
                                href={`${filter.filterUrl}`}
                                onClick={() =>
                                    clickChangeFilter(filter.filterName)
                                }>
                                {filter.filterName}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default TodoFooterComponent;

