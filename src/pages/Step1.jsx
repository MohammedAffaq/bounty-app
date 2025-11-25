import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import { useBounty } from '../context/BountyContext'

export default function Step1(){
  const { data, update } = useBounty()
  const nav = useNavigate()
  const [errors, setErrors] = React.useState({})

  function validate(){
    const e = {}
    if(!data.title || data.title.trim()==='') e.title = 'Title is required'
    if((data.title||'').length>40) e.title = 'Max 40 characters'
    if(!data.description || data.description.trim()==='') e.description = 'Description is required'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function next(){ if(validate()) nav('/step/2') }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Basics</h2>
      <Input label="Bounty Title" name="title" value={data.title} onChange={e=>update({ title: e.target.value })} error={errors.title} />
      <Textarea label="Bounty Description" name="description" value={data.description} onChange={e=>update({ description: e.target.value })} error={errors.description} />
      <Dropdown label="Bounty Type" name="type" value={data.type} onChange={e=>update({ type: e.target.value })} options={["Content","Design","Development","Marketing","Other"]} />
      <Dropdown label="Dominant Impact Core" name="dominant_core" value={data.dominant_core} onChange={e=>update({ dominant_core: e.target.value })} options={["Water","Earth","Social","Energy"]} />

      <div className="mb-4">
        <div className="mb-1 text-sm font-medium">Bounty Mode</div>
        <label className="mr-4"><input type="radio" name="mode" checked={data.mode==='digital'} onChange={()=>update({mode:'digital'})}/> Digital</label>
        <label className="ml-4"><input type="radio" name="mode" checked={data.mode==='physical'} onChange={()=>update({mode:'physical'})}/> Physical</label>
      </div>

      {data.mode==='physical' && (
        <Input label="Location" name="location" value={data.location} onChange={e=>update({ location: e.target.value })} />
      )}

      <div className="flex gap-2 mt-6">
        <Button onClick={()=>nav('/')} >Cancel</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
