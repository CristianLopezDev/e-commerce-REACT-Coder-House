import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import { useParams} from "react-router-dom"; 
import {products} from "../data/products";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const { id } = useParams ();

    useEffect (() => {
        const promesa = new Promise ((res, rej) => {
            setTimeout (() => {
                res (products)
                }, 2000); 
            });

            promesa.then((response) => {
              if (!id) {
                setItems (response);
              } else {
                const filterByCategory = response.filter (
                  (item) => item.category === id
                );
                setItems (filterByCategory)
              }
            });
        }, [id]);

        console.log (items);

    return (
        <Container className="mt-4"> 
            <h1>{props.greeting}</h1>
            <ItemList items={items} />
        </Container>
    );
};