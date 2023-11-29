# Combinators

## Selectors
- Element selector
    ```CSS
    p {
        font-weight: bold;
    }
    ```
- Class selector
    - It's common to see `container` as a name for a class, especially got `div` elements
    ```CSS
    .wrapper {
        border: 1px solid #c6c6c6;
    }
    ```
- Id Selector
    ```CSS
    #label {
        background-color: teal;
    }
    ```
- Combinators
    - All children
        - Selects all children of specified selector
        - Example below selects all `p` elements that are a child of `div`
        ```CSS
        div p {
            font-weight: bold;
        }
        ```
    - Direct child
        - Selects direct children of specified selector
        - Example below selects all `p` elements that are **direct** children of `div`
        ```CSS
        div > p {
            font-weight: bold;
        }
        ```
    - Adjacent sibling
        - Selects the sibling after the specified selector
        - Example below selects the first `p` element after `div` on the same level (this means they are siblings)
        ```CSS
        div + p {
            text-decoration: underline;
        }
        ```
    - General sibling
        - Selects all siblings of the specified `div`
        - Examples below selects all `p` elements on the same level as the `div`
        ```CSS
            div ~ p {
                font-style: italic;
            }
        ```

