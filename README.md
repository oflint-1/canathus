# Canathus
Custom form hook for React


# Ideal workflow 

```TSX
// <!-- Ideal workflow -->
const [data, setData] = useInput<string>("", (value) => {
    return {
        valid: value.length > 2,
        errorMsg: value.length <= 2 ? "Too short" : "",
    };
});

const handleSubmit = (e: any) => {
    e.preventDefault();
    validate({ data });
};

return (
<form onSubmit={(e) => handleSubmit(e)}>
    <input
    value={data.value}
    onChange={(e) => setData(e.target.value)}
    className={`${data.error ? "test" : ""}`}
    />
    <br />
    {data.error && <p>{data.errorMsg}</p>}
    <button>test</button>
</form>
);
```