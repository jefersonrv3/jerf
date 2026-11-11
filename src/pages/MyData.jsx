import { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getStudent, updateStudent } from '../services/studentService'

const EDITABLE_FIELDS = [
  { name: 'nome', label: 'Nome' },
  { name: 'email', label: 'E-mail' },
  { name: 'celular', label: 'Celular' },
  { name: 'endereco', label: 'Endereço' },
]

function MyData() {
  const { data, loading, error } = useFetch(getStudent)
  const [form, setForm] = useState(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (data) setForm(data)
  }, [data])

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setSaved(false)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    await updateStudent(form)
    setSaved(true)
  }

  return (
    <>
      <PageTitle title="Meus dados" subtitle="Consulte e atualize seus dados sempre que necessário." />
      <AsyncState loading={loading} error={error} empty={!form}>
        {form && (
          <>
            <Card title="Dados acadêmicos">
              <p>Instituição: {form.instituicao}</p>
              <p>Curso: {form.curso}</p>
              <p>Semestre: {form.semestre}</p>
            </Card>
            <Card title="Dados pessoais">
              {saved && <p className="message">Dados salvos!</p>}
              <form className="form" onSubmit={handleSubmit}>
                <label className="field">
                  CPF
                  <input value={form.cpf} disabled />
                </label>
                {EDITABLE_FIELDS.map((field) => (
                  <label className="field" key={field.name}>
                    {field.label}
                    <input name={field.name} value={form[field.name]} onChange={handleChange} />
                  </label>
                ))}
                <div>
                  <button className="btn" type="submit">Salvar</button>
                </div>
              </form>
            </Card>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default MyData
