// <!-- Ideal workflow -->
const [data, setData] = useInput(null, data => { data.length > 0; });

<form>
    <input value={data} onchange={value => setData(value)} className={`${data.errorStyle}`}/>
    {data.error && <p>{data.errorMsg}</p>}
</form>