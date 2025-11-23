import { useState, useEffect } from 'react'
import API_URL from '../config'

export const useProperties = () => {
    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProperties = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(`${API_URL}/properties`)
                const json = await response.json()

                if (!response.ok) {
                    setError(json.error)
                } else {
                    setProperties(json)
                }
            } catch (err) {
                setError('Failed to fetch properties')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProperties()
    }, [])

    return { properties, isLoading, error }
}
