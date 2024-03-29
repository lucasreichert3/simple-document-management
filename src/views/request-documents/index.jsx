import React from 'react'
import './style.scss'
import logo from '../../assets/logo.svg'
import RequestInfoCard from '../../components/request-info-card/index'
import RequestFormCard from '../../components/request-form-card/index'
import DocumentsListCard from '../../components/documents-list-card/index'
import { useDocuments } from '../../contexts/documents'
import MessagesContainer from '../../components/messages-container'

function RequestDocuments() {
  const { documents } = useDocuments()

  return (
    <>
      <MessagesContainer />
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <main className="main">
        <div className="request-header">Pedido #1</div>
        <div className="request-info">
          <RequestInfoCard />
        </div>
        <div className="request-documents">
          <div className="form">
            <RequestFormCard />
          </div>
          <div className="list">
            {documents.length > 0 && (
              <h2 className="title">
                {documents.length} documento
                {documents.length === 1 ? '' : 's'} solicitado
              </h2>
            )}
            <DocumentsListCard />
          </div>
        </div>
      </main>
    </>
  )
}

export default RequestDocuments
