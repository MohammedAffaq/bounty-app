import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Toggle from '../components/Toggle'
import Button from '../components/Button'
import { useBounty } from '../context/BountyContext'

export default function Step3(){
  const { data, update, reset } = useBounty()
  const nav = useNavigate()
  const [errors, setErrors] = React.useState({})
  const [submitting, setSubmitting] = React.useState(false)

  function validate(){
    const e = {}
    if(data.has_backer){ if(!data.backer.name) e.backer_name = 'Backer name required' }
    if(!data.terms_accepted) e.terms = 'Accept terms to proceed'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function submit(){
    if(!validate()) return
    setSubmitting(true)
    setTimeout(()=>{
      const payload = { ...data }
      payload.reward.amount = Number(payload.reward.amount)
      localStorage.setItem('bounty_payload', JSON.stringify(payload))
      setSubmitting(false)
      nav('/confirmation')
    }, 1200)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Backer</h2>
      <Toggle label="Has Backer?" checked={data.has_backer} onChange={val=>update({ has_backer: val })} />
      {data.has_backer && (
        <div>
          <Input label="Backer Name" name="backer.name" value={data.backer.name} onChange={e=>update({ backer: { ...data.backer, name: e.target.value } })} error={errors.backer_name} />
          <Input label="Backer Logo URL" name="backer.logo" value={data.backer.logo} onChange={e=>update({ backer: { ...data.backer, logo: e.target.value } })} />
          <Input label="Backer Message" name="backer.message" value={data.backer.message} onChange={e=>update({ backer: { ...data.backer, message: e.target.value } })} />
        </div>
      )}

      <div className="mb-4">
        <label className="flex items-center gap-2"><input type="checkbox" checked={data.terms_accepted} onChange={e=>update({ terms_accepted: e.target.checked })} /> I accept the Terms & Conditions</label>
        {errors.terms && <p className="text-xs text-red-600">{errors.terms}</p>}
      </div>

      <div className="flex gap-2 mt-6">
        <Button onClick={()=>nav('/step/2')}>Back</Button>
        <Button onClick={submit} disabled={submitting}>{submitting? 'Submitting...':'Create Bounty'}</Button>
      </div>

      <div className="mt-6 text-sm text-gray-600">You can preview payload later on the Results page.</div>
    </div>
  )
}
