import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://vabcixwnqthdykbqcmgl.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhYmNpeHducXRoZHlrYnFjbWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NTc4NTMsImV4cCI6MjA0NDMzMzg1M30.GKwjhSChwNQdyN4eYnlE41WfQxLtrkpROEUqxlcRz8Y",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhYmNpeHducXRoZHlrYnFjbWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NTc4NTMsImV4cCI6MjA0NDMzMzg1M30.GKwjhSChwNQdyN4eYnlE41WfQxLtrkpROEUqxlcRz8Y"
    }
})