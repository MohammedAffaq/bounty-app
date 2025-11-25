import React from 'react'

export default function Result(){
  const raw = localStorage.getItem('bounty_payload')
  const payload = raw ? JSON.parse(raw) : null
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Result</h2>
      {payload ? (
        <pre className="json-pre p-4 border rounded bg-white">{JSON.stringify(payload, null, 2)}</pre>
      ) : (
        <div>No payload found.</div>
      )}
    </div>
  )
}
