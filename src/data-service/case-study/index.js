import request, { gql } from "graphql-request";
export const graphqlAPI =
  "https://api-us-west-2.hygraph.com/v2/clmysbizm0adt01ukb6lt4vrk/master" ?? "";
export const graphqlMutationToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTU2NDAwODIsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xteXNiaXptMGFkdDAxdWtiNmx0NHZyay9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYTAzOTI4ZTAtMzRiOC00N2U0LWI1YmEtMTcwZTkzMzk4ZGVmIiwianRpIjoiY2t6OHM1MmZhMG4zNTAxeXhidWh5Y21lMSJ9.KgPW1Dga0PrvOe4qoPytDTjYpi4qxR5Xfed-19NYYFFVJGYCy_nOudHXaqItky0IyFZpfhuQrmSUJfpK9Q1dlZ7UmYqdCIYX83u7hD4PZPlIz9H5JoZH_zW_3lU-96fSpehsesuR09-1TM-AOtBr6T8s-YHW2ACuwykLwjqOrHlko8r8iWXVsdAEZG9SdPKX4d8d9HOIokqVe071wabdg1_QU8QohYgpktSnDxmLJkD3UuD54UlmIl5zmIPhPyMS7qqZFyo7SKOLPfbYNCx4bJZc_v0yKa5Y-dl7Kjvq5fbZAvpXRiWbwANq34AuUhintIaah1eOeShN8TGXN7g-kUuxhrFVd2kLiGyOHF4o5qlchDQ7XKO5rnVE4c2kAJchFlPNh5teXg-o1W0d7gOvW9tinpd5_LG8LfTgBmTgbudLWItRWjl0l7swSuOH1FZNCDK62XGT9rFw3EeROUQ-W2NrEQzhdw8kRbK7LWZI7Er6cs7CEqO9jmMJNzT44TXKErPrblQTo91afkJGYpGRawSOjbsOohrCdRyaAhJGL7TcOd_X1iLmeZ2g1LWtah70egT7BWBMF3MlH1oNYDQm5e0vleziwk4qb_qyRYsyBehMaJIZnBGPxbcLCHYzlFNm8KeBSccuBs6BasF6ztz6RjX1AXwuTKWdhp41CpUv0Oo";

export const getCaseStudyQuery = `query fetchCaseStudy {
  caseStudies {
    id
    createdAt
    slug
    title
    categories
    clientName
    moreDetails{
      raw
    }
    headerImage {
      url
    }
    
    content{
      raw
    }
   
  }
}
`;
