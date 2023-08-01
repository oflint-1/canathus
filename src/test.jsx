// <!-- Ideal workflow -->
const [data, setData] = useInput(null, data => { data.length > 0; });

const submit = (e) => {
    const valid = validate([...attributes])

    if (valid){
        return true;
    }
}

<form>
    <input value={data} onchange={value => setData(value)} className={`${data.error? "test" : ""}`}/>
    {data.error && <p>{data.errorMsg}</p>}
</form>