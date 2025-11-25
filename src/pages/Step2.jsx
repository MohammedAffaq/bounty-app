import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Input from '../components/Input'
import Toggle from '../components/Toggle'
import Button from '../components/Button'
import { useBounty } from '../context/BountyContext'

export default function Step2(){
  const { data, update } = useBounty()
  const nav = useNavigate()
  const [errors, setErrors] = React.useState({})

  function validate(){
    const e = {}
    if(!data.reward || !data.reward.amount || Number(data.reward.amount) <= 0) e.reward_amount = 'Amount must be greater than 0'
    if(!data.timeline.expiration_date) e.expiration_date = 'Expiration date required'
    if(data.hasImpactCertificate && !data.impactBriefMessage) e.impactBriefMessage = 'Impact brief required'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function next(){ if(validate()) nav('/step/3') }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Rewards & Timeline</h2>
      <Dropdown label="Currency" name="currency" value={data.reward.currency} onChange={e=>update({ reward: { ...data.reward, currency: e.target.value } })} options={["USD","EUR","INR","GBP"]} />
      <Input label="Total Reward Amount" name="amount" type="number" value={data.reward.amount} onChange={e=>update({ reward: { ...data.reward, amount: e.target.value } })} error={errors.reward_amount} />
      <Input label="Number of Winners" name="winners" type="number" value={data.reward.winners} onChange={e=>update({ reward: { ...data.reward, winners: e.target.value } })} />

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Expiration Date</label>
        <input type="datetime-local" value={data.timeline.expiration_date} onChange={e=>update({ timeline: { ...data.timeline, expiration_date: e.target.value } })} className={`w-full border rounded p-2 ${errors.expiration_date? 'border-red-500':'border-gray-300'}`} />
        {errors.expiration_date && <p className="text-xs text-red-600 mt-1">{errors.expiration_date}</p>}
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Estimated Completion Time</div>
        <div className="flex gap-2">
          <Input label="Days" name="days" type="number" value={data.timeline.estimated_completion.days} onChange={e=>update({ timeline: { ...data.timeline, estimated_completion: { ...data.timeline.estimated_completion, days: e.target.value } } })} />
          <Input label="Hours" name="hours" type="number" value={data.timeline.estimated_completion.hours} onChange={e=>update({ timeline: { ...data.timeline, estimated_completion: { ...data.timeline.estimated_completion, hours: e.target.value } } })} />
          <Input label="Minutes" name="minutes" type="number" value={data.timeline.estimated_completion.minutes} onChange={e=>update({ timeline: { ...data.timeline, estimated_completion: { ...data.timeline.estimated_completion, minutes: e.target.value } } })} />
        </div>
      </div>

      <Toggle label="Has Impact Certificate?" checked={data.hasImpactCertificate} onChange={val=>update({ hasImpactCertificate: val })} />
      {data.hasImpactCertificate && (
        <Input label="Impact Brief" name="impactBriefMessage" value={data.impactBriefMessage} onChange={e=>update({ impactBriefMessage: e.target.value })} error={errors.impactBriefMessage} />
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">SDGs</label>
        <select multiple value={data.sdgs} onChange={e=>{
          const options = Array.from(e.target.selectedOptions).map(o=>o.value)
          update({ sdgs: options })
        }} className="w-full border rounded p-2 h-28">
          {['No Poverty','Zero Hunger','Good Health','Quality Education','Gender Equality'].map(s=> <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex gap-2 mt-6">
        <Button onClick={()=>nav('/step/1')}>Back</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
