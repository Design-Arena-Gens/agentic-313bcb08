'use client'

import { useState } from 'react'

const aspirationalObjects = [
  {
    id: 1,
    name: 'Vintage Porsche 911',
    emoji: '🏎️',
    description: 'Classic automotive excellence',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    name: 'Mountain Cabin',
    emoji: '🏔️',
    description: 'Peaceful retreat in nature',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    name: 'Grand Piano',
    emoji: '🎹',
    description: 'Timeless musical artistry',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    name: 'Rare First Edition',
    emoji: '📚',
    description: 'Literary treasure',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
]

export default function Home() {
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (item) => {
    setSelected(item)
    setShowResult(true)
  }

  const handleReset = () => {
    setSelected(null)
    setShowResult(false)
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #ffecd2 0%, #fcb69f 100%)',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: '700',
          color: '#2d3748',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          ✨ Choose Your Aspiration ✨
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.25rem',
          color: '#4a5568',
          marginBottom: '3rem',
          fontStyle: 'italic'
        }}>
          Which precious object speaks to your soul?
        </p>

        {!showResult ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            padding: '20px'
          }}>
            {aspirationalObjects.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                style={{
                  background: item.gradient,
                  borderRadius: '24px',
                  padding: '32px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  minHeight: '280px',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '16px',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}>
                  {item.emoji}
                </div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '8px',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
                }}>
                  {item.name}
                </h2>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255,255,255,0.9)',
                  fontStyle: 'italic'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'white',
            borderRadius: '32px',
            padding: '60px 40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '8rem',
              marginBottom: '24px',
              animation: 'bounce 1s ease infinite'
            }}>
              {selected.emoji}
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2d3748',
              marginBottom: '16px'
            }}>
              Wonderful Choice!
            </h2>
            <p style={{
              fontSize: '1.5rem',
              color: '#4a5568',
              marginBottom: '32px'
            }}>
              You selected: <strong>{selected.name}</strong>
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: '#718096',
              fontStyle: 'italic',
              marginBottom: '40px'
            }}>
              {selected.description} - A beautiful aspiration! ✨
            </p>
            <button
              onClick={handleReset}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '16px 48px',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Choose Again
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </main>
  )
}
