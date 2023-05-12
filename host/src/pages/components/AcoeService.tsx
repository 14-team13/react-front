import { Col, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const AcoeService = () => {
  return (
    <div className="mg40">
      <h1>서비스 이용 약관</h1>

      <p><strong>제 1조 (목적)</strong></p>
      <p>이 약관은 에코(이하 &quot;회사&quot;라 한다)가 운영하는 인터넷 웹사이트인 ACOE(<a href="http://acoe.co.kr/"></a><a href="http://acoe.co.kr/">http://acoe.co.kr/</a>)(이하 &quot;사이트&quot;라 한다)에서 제공하는 인터넷 관련 서비스(이하 &quot;서비스&quot;라 한다)를 이용함에 있어 서비스와 서비스 이용자의 권리 의무 및 책임 사항을 규정함을 목적으로 합니다.</p>
      <p>※ 「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</p>
      <p><strong>제 2조 (정의)</strong></p>
      <p>① &quot;회사&quot;라 함은 &lsquo;에코&rsquo;를 말합니다.</p>
      <p>② &quot;사이트&quot;라 함은 사업자가 재화 또는 용역(이하 &quot;재화 등&quot;이라 함)을 &quot;회원&quot; 에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 운영하고 있는 인터넷 웹사이트 ACOE(<a href="http://acoe.co.kr/"></a><a href="http://acoe.co.kr/">http://acoe.co.kr/</a>)를 말합니다.</p>
      <p>③ &quot;이용자&quot;라 함은 &quot;사이트&quot;에 접속하여 이 약관에 따라 &quot;사이트&quot;가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
      <p>④ &quot;회원&quot;이라 함은 &quot;사이트&quot;에 회원 등록을 한 자로서, 계속적으로 &quot;사이트&quot;가 제공하는 서비스를 이용할 수 있는 자를 말합니다. 회원은 각 호와 같이 구분하며 서비스 이용 목적에 따라 &quot;서비스 이용자&quot;를 &quot;회원&quot;으로 칭합니다.</p>
      <p>가 &quot;서비스 이용자&quot;이라 함은 회사가 운영하는 사이트에 개인정보를 제공하여 &quot;회원&quot; 등록을 한 자로서, 계속적으로 회사의 서비스를 제공 받으며 이용할 수 있는 자를 말합니다.</p>
      <p>나. &quot;비회원&quot;이라 함은 &quot;사이트&quot;에 가입하지 않고 &quot;사이트&quot;가 제공하는 서비스를 이용하는 자를 말합니다.</p>
      <p>⑤ &nbsp;&quot;서비스&quot;라 함은 접속 가능한 유/무선 단말기의 종류와 상관없이 이용자가 이용할 수 있는 회사가 제공하는 모든 서비스를 의미합니다.</p>
      <p>⑥ &quot;게시물&quot;이라 함은 &quot;회원&quot;이 &quot;서비스&quot;를 이용함에 있어 &quot;서비스&quot; 상에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.</p>
      <p>이 약관에서 사용하는 용어 중 본 조에서 정하지 아니한 것은 일반 관례를 따릅니다.</p>
      <p><strong>제 3조 (약관 등의 명시와 설명 및 개정)</strong></p>
      <p>① &quot;회사&quot;는 &quot;이용자&quot;가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 중요한 내용을 &quot;이용자&quot;가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 &quot;이용자&quot;의 확인을 구하여야 합니다.</p>
      <p>② &quot;회사&quot;는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제 에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
      <p>③ &quot;회사&quot;가 약관을 개정할 경우에는 적용 일자 및 개정 사유를 명시하여 현행약관과 함께 &quot;사이트&quot;의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, &quot;회원&quot;에게 불리하게 약관내용을 변경하는 경우에는 최소 한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 &quot;회사&quot;는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 &quot;회원&quot;이 알기 쉽도록 표시합니다.</p>
      <p>④ &quot;회사&quot;가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결 되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 &quot;회원&quot;이 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 &quot;회사&quot;에 송신하여 &quot;회사&quot;의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.</p>
      <p>⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.</p>
      <p><strong>제 4조 (서비스의 제공 및 변경)</strong></p>
      <p>① &quot;회사&quot;가 &quot;회원&quot;에게 제공하는 서비스의 내용은 다음과 같습니다.</p>
      <p>가. 장소 정보 제공 서비스</p>
      <p>나. &quot;회사&quot;가 제공하는 정보 열람 편의를 위해 &quot;회원&quot;에게 제공하는 일체의 서비스</p>
      <p>다. 기타 &quot;회사&quot;가 추가 개발하거나 제휴계약 등을 통해 &quot;회원&quot;에게 제공하는 일체의 서비스</p>
      <p>② &quot;회사&quot;는 제 1항의 서비스 외 다른 서비스를 추가할 수 있으며, 추가된 서비스에 대해서도 본 약관이 동일하게 적용됩니다.</p>
      <p>③ &quot;회사&quot;는 서비스의 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 서비스의 내용을 변경할 수 있습니다. 이 경우에는 변경된 &quot;서비스&quot;의 내용 및 제공일자를 명시하여 현재의 서비스의 내용을 게시한 곳에 신속하게 공지합니다.</p>
      <p>④ &quot;회사&quot;가 제공하기로 &quot;회원&quot;과 계약을 체결한 서비스의 내용을 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 &quot;회원&quot;에게 통지 가능한 주소(이메일 주소 포함)로 즉시 통지합니다. 전항의 경우 &quot;회사&quot;는 이로 인하여 &quot;회원&quot;이 입은 손해를 배상합니다. 다만, &quot;회사&quot;가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
      <p><strong>제 5조 (서비스의 해외이용)</strong></p>
      <p>① &quot;회사&quot;는 &quot;이용자&quot;가 대한민국의 영토 이외의 지역에서 &quot;사이트&quot;를 이용하고자 하는 경우 &quot;사이트&quot;의 품질 또는 사용성을 보장하지 않습니다.</p>
      <p>② &quot;이용자&quot;는 대한민국의 영토 이외의 지역에서 &quot;사이트&quot;를 이용하고자 하는 경우 스스로의 판단과 책임에 따라서 이용 여부를 결정하여야 하고, 특히 &quot;사이트&quot;의 이용과정에서 현지 법령을 준수할 책임은 &quot;이용자&quot;에게 있습니다.</p>
      <p><strong>제 6조 (서비스 이용시간)</strong></p>
      <p>① &quot;회사&quot;는 특별한 사유가 없는 한 연중무휴, 1일 24시간 &quot;서비스&quot;를 제공합니다. 다만, &quot;회사&quot;는 &quot;서비스&quot;의 종류나 성질에 따라 제공하는 &quot;서비스&quot; 중 일부에 대해서는 별도로 이용시간을 정할 수 있으며, 이 경우 &quot;회사&quot;는 그 이용시간을 사전에 &quot;회원&quot;에게 공지 또는 통지하여야 합니다.</p>
      <p>② &quot;회사&quot;는 자료의 가공과 갱신을 위한 시스템 작업시간, 장애해결을 위한 보수작업 시간, 회선 장애 등이 발생한 경우 일시적으로 &quot;서비스&quot;를 중단할 수 있으며 계획된 작업의 경우 공지란에 &quot;서비스&quot; 중단 시간과 작업 내용을 알려야 합니다. 다만, &quot;회사&quot;가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.</p>
      <p><strong>제 7조 (서비스의 중단)</strong></p>
      <p>① &quot;회사&quot;는 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
      <p>② &quot;회사&quot;는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 &quot;회원&quot; 또는 제3자가 입은 손해에 대하여 배상합니다. 단, &quot;회사&quot;가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
      <p>③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공 할 수 없게 되는 경우에는 &quot;회사&quot;는 제8조에 정한 방법으로 &quot;회원&quot;에게 통지하고 당초 &quot;회사&quot;에서 제시한 조건에 따라 소비자에게 보상합니다.</p>
      <p><strong>제 8조 (정보의 제공 및 광고의 게재)</strong></p>
      <p>① &quot;회사&quot;는 &quot;회원&quot;에게 서비스 이용에 필요가 있다고 인정되거나 서비스 개선 및 회원 대상의 서비스 소개 등의 목적으로 하는 각종 정보에 대해서 전자 우편이나 서신 우편을 이용한 방법으로 제공할 수 있습니다.</p>
      <p>② &quot;회사&quot;는 제공하는 서비스와 관련되는 정보 또는 광고를 서비스 화면, 홈페이지 등에 게재할 수 있으며, 광고가 게재된 전자우편을 수신한 &quot;회원&quot;은 수신거부를 &quot;회사&quot;에게 할 수 있습니다.</p>
      <p>③ &quot;회사&quot;는 &quot;서비스&quot;의 운용과 관련하여 서비스 화면 등에 대하여 &quot;회사&quot;가 지정하는 위치에 광고 등을 게재할 수 있습니다.</p>
      <p>④ &quot;회원&quot;은 &quot;회사&quot;에서 제공하는 사이트 광고에 대한 임의의 삭제, 비방 기타 사이트 광고 방해 행위 등을 할 수 없습니다.</p>
      <p>⑤ 본 서비스의 &quot;회원&quot;은 서비스 이용 시 노출되는 광고게재에 대해 동의하는 것으로 간주합니다.</p>
      <p>⑥ &quot;회사&quot;는 서비스 상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 &quot;회원&quot;이 참여하거나 교신 또는 거래를 함으로써 발생하는 모든 손실과 손해에 대해 책임을 지지 않습니다.</p>
      <p><strong>제 9조 (회원가입)</strong></p>
      <p>① &quot;회사&quot;는 &quot;회사&quot;의 서비스를 이용하고자 하는 자가 본 약관과 개인정보처리방침을 읽고 이에 대하여 &quot;동의&quot; 또는 &quot;확인&quot; 버튼을 누르는 경우 &quot;회원&quot;으로 가입됨과 동시에 &quot;회사&quot;와의 사이에서 사이트 이용 계약이 성립되고 이를 서비스 이용에 대한 신청으로 간주합니다.</p>
      <p>② &quot;회사&quot;는 다음 각 호의 사유가 있는 경우 이용 신청을 승낙하지 아니하며, 추후 아래 사항에 해당함이 확인된 경우 &quot;회사&quot;는 이용계약을 해지할 수 있습니다.</p>
      <p>가. 다른 사람의 명의를 사용하거나 본인의 실명으로 신청하지 않은 경우</p>
      <p>나. 서비스 이용 계약 신청서의 내용을 허위로 기재하거나, 기재 누락, 오기로 기재신청서의 내용 중 중요한 내용의 기재를 누락하였을 경우</p>
      <p>다. 가입신청자가 이전에 회원자격을 상실한 적이 있는 경우나, 선량한 풍속 기타 사회질서를 위반하거나, 위반할 목적으로 신청하였을 경우</p>
      <p>라. &quot;회사&quot;가 지정한 문자가 포함되어 있는 메일 주소로 가입을 신청한 경우</p>
      <p>마. 전화번호 등 개인정보 홍보를 목적으로 문자를 조합하여 아이디를 만든 경우바. 기타 회원으로 등록하는 것이 &quot;회사&quot;의 기술상 현저히 지장이 있다고 판단되는 경우</p>
      <p>사. 기타 &quot;회사&quot;가 정한 이용신청 요건이 만족되지 않았을 경우</p>
      <p>③ &quot;회사&quot;는 다음 각 호의 사유가 있는 경우 해당 이용신청에 대한 승낙을 유보할 수 있습니다.</p>
      <p>가. 설비에 여유가 없는 경우</p>
      <p>나. 기술상 지장이 있는 경우</p>
      <p>다. 이용계약이 해지 된 전회원이 해지일로부터 6개월 이내에 재가입 신청을 하는 경우</p>
      <p>라. 기타 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우</p>
      <p>④ 본 조 제3항의 경우, 회사는 이용신청자에게 승낙유보의 사유와 승낙가능시기를 e-mail로 통지할 수 있습니다.</p>
      <p><strong>제 10조 (회원 정보의 변경)</strong></p>
      <p>① 회원은 가입신청 시 기재한 사항이 변경되었을 경우 &quot;사이트&quot;에서 수정을 하거나 전자우편 기타 방법으로 &quot;회사&quot;에게 그 변경사항을 알려야 합니다.</p>
      <p>② 제1항의 변경사항을 &quot;회사&quot;에 알리지 않아 발생한 불이익에 대하여 &quot;회사&quot;는 책임지지 않습니다.</p>
      <p>③ 서비스 이용자 ID 및 비밀번호의 관리 책임은 회원에게 있습니다. 관리 소홀로 인해 발생하는 서비스 이용상의 손해 및 제3자에 의한 부정이용 등에 대한 책임은 회원에게 있으며 회사는 책임지지 않습니다.</p>
      <p><strong>제11조 (회원정보, 게시물에 대한 권리와 책임)</strong></p>
      <p>① &quot;회원&quot;이 &quot;서비스&quot;에 게시한 &quot;회원정보&quot;, 글 및 사진 등 모든 게시물에 대한 권리는 &quot;회사&quot;에게 있습니다.</p>
      <p>② &quot;회사&quot;가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 &quot;회사&quot;에 귀속합니다.</p>
      <p>③ &quot;회원&quot;은 &quot;회사&quot;가 정하는 방법에 의해 다른 &quot;회원&quot;의 &quot;회원정보&quot; 및 게시물을 열람할 수 있습니다.</p>
      <p>④ &quot;회원&quot;은 &quot;서비스&quot;를 이용하여 선량한 풍속 기타 사회질서를 해하거나, 타인의 권리를 침해하는 행위를 하여서는 아니 되고, 바이러스, 애드웨어, 스파이웨어 등을 포함하고 있는 내용 또는 제3자의 저작권 등 지적재산권을 침해하는 내용의 &quot;회원정보&quot;나 게시물을 게시하거나 전송 또는 배포할 수 없으며 이에 대한 모든 책임은 &quot;회원&quot; 본인에게 있습니다.</p>
      <p>⑤ &quot;회사&quot;는 &quot;서비스&quot;의 운영과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다. 광고가 게재된 전자우편 등을 수신한 &quot;회원&quot;은 수신거절을 &quot;회사&quot;에게 요청 할 수 있습니다.</p>
      <p>⑥ &quot;회사&quot;는 이외의 방법으로 &quot;회원&quot;의 &quot;회원정보&quot;나 게시물을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 &quot;회원&quot;의 동의를 얻어야 합니다.</p>
      <p>⑦ &quot;회원&quot;이 서비스에서 게시하는 콘텐츠나 정보가 본 이용 약관 전반에 위배된다고 판단되거나, 특정 업체의 홍보 성격이 강하거나, &lsquo;불쾌감을 주는 콘텐츠&rsquo;에 해당하거나, 법에 따라 삭제해야 할 경우, 당사는 이를 삭제할 수 있습니다. 당사는 서비스 이용자, 서비스 자체와 커뮤니티를 보호하기 위해 서비스 전부 또는 일부를 제공하는 것을 즉시 중단하거나 거부하고, 콘텐츠를 삭제할 수 있으며, 위의 내용이 반복될 경우 &quot;회원&quot;의 서비스 이용을 정지 혹은 탈퇴 처리 할 수 있습니다. 이는 귀하가 당사에 위험 또는 법적 문제를 일으키거나, 본 약관을 위반하거나, 다른 사람의 지적 재산권을 반복적으로 침해하거나, 법률에 따라 허용되거나 요구되는 경우에도 적용됩니다.</p>
      <p><strong>제 12조 (금지행위)</strong></p>
      <p>① 회원은 다음 각 호의 행위를 해서는 안됩니다.</p>
      <ul>
        <li>
          <p>이용계약 신청 또는 이용정보 변경 시 허위내용의 등록</p>
        </li>
        <li>
          <p>회사의 서비스에 게시된 정보 또는 회원이 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 영리 또는 비영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위</p>
        </li>
        <li>
          <p>회사가 게시한 정보의 허가 받지 않은 변경</p>
        </li>
        <li>
          <p>회사가 제공하는 서비스 및 사이트를 이용하여 본인 또는 제3자를 홍보하거나, 홍보할 기회를 제공하는 행위</p>
        </li>
        <li>
          <p>회사가 제공하는 서비스 및 사이트를 이용하여 본인을 홍보하거나 제3자의 홍보를 대행하는 등의 방법으로 금전을 수수하 는 행위</p>
        </li>
        <li>
          <p>서비스를 이용할 권리를 양도하고 이를 대가로 금전을 수수하는 행위</p>
        </li>
        <li>
          <p>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</p>
        </li>
        <li>
          <p>정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)을 전송하거나 게시 및 관련 사이트를 링크하는 행위</p>
        </li>
        <li>
          <p>회사 및 기타 제3자의 저작권 등 지적 재산권에 대한 침해</p>
        </li>
        <li>
          <p>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
        </li>
        <li>
          <p>다른 회원의 아이디 및 비밀번호를 도용하여 서비스를 이용하는 행위</p>
        </li>
        <li>
          <p>컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하는 자료를 게시하거나 메일으로 발송하는 행위</p>
        </li>
        <li>
          <p>스토킹, 욕설, 채팅글 도배 등 다른 회원의 서비스 이용을 방해하는 행위</p>
        </li>
        <li>
          <p>다른 회원의 개인정보를 그 동의 없이 수집, 저장, 공개, 유포하는 행위</p>
        </li>
        <li>
          <p>근거 없이 회사의 명예나 신용을 훼손하는 행위- 회원의 의무 불이행- 현행 법령, 회사가 제공하는 서비스에 대한 약관 기타 서비스 이용에 관한 규정 및 회사 방침(사이트 공지사항 포함)에 위반하는 행위</p>
        </li>
      </ul>
      <p>② 회사는 본 조 제1항 각 호의 정보 기타 회사 운영상 부적절하다고 판단한 정보가 회사에 게시되거나 회사와 링크된 곳에 게시된 경우, 회원 기타 정보를 게시한 자의 승낙 없이 회사에 게재된 당해 정보를 삭제하거나 회사에 확장된 링크를 절단할 수 있습니다.</p>
      <p>③ 회사는 본 조 제2항으로 인한 회원의 손해는 책임지지 않습니다.</p>
      <p><strong>제 13조 (이용계약의 종료)</strong></p>
      <p>&quot;사이트&quot; 서비스 이용계약은 일방 당사자의 해지의사표시로 종료됩니다.</p>
      <p>① &quot;회원&quot;은 &quot;회사&quot;에 언제든지 의사표시를 통지함으로써 탈퇴를 요청할 수 있으며 ,&quot;회사&quot;는 요청을 수령한 즉시 &quot;회원&quot;탈퇴 처리를 합니다.</p>
      <p>② 이용계약해지의 의사표시는 &quot;회사&quot;가 정한 방식에 따라 표시되어야 합니다.</p>
      <p>③ 본 조 제2항의 이용계약해지의 의사표시는 당해 &quot;회원&quot;이 관여한 구매 서비스 등을 모두 취소한 후에 이루어져야 합니다. 이와 관련된 모든 불이익은 &quot;회원&quot;의 부담으로 합니다.</p>
      <p>④ 이용계약해지 의사표시의 효력은 해지의사가 &quot;회사&quot;에 도달하는 즉시 발생합니다. 단, &quot;회원&quot;이 구매를 통하여 관여한 사항이 진행 중인 때에는 해당 진행이 완료될 때까지 당 효력이 정지됩니다.</p>
      <p>⑤ &quot;회원&quot;이 다음 각 호의 사유에 해당하는 경우, &quot;회사&quot;는 &quot;회원&quot;자격을 제한 또는 정지시킬 수 있습니다. 단, &quot;회원&quot;이 제 14조의 행위를 한 경우에는 위반행위의 중대성에 따라 &quot;회원&quot;계약을 해지할 수도 있습니다.</p>
      <p>가. 가입 신청 시에 허위 내용을 등록한 경우</p>
      <p>나. 다른 사람의 &quot;서비스&quot; 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</p>
      <p>다. &quot;회사&quot;나 다른 회원 기타 타인의 권리, 명예, 신용 기타 정당한 이익을 침해하는 행위를 한 경우</p>
      <p>라. 약관이 금지하는 행위를 한 경우</p>
      <p>마. 일정기간 이상 사용하지 않아, 개인정보보호를 위해서 필요하다고 판단되는 경우</p>
      <p>바. &quot;회원&quot;으로서의 자격을 지속시키는 것이 부적절하다고 판단되는 경우</p>
      <p>사. 기타 &quot;서비스&quot;를 이용하여 법령 또는 공서 양속에 반하는 행위를 하는 경우</p>
      <p>⑥ &quot;회원&quot; 자격을 제한 또는 정지 &quot;회원&quot;은 거래와 관련된 모든 서비스 이용이 제한됩니다.</p>
      <p>⑦ &quot;회사&quot;가 &quot;회원&quot; 자격을 제한 또는 정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우, 또는 &quot;회원&quot;이 본 조 제 5항에 해당하는 행위를 한 경우 &quot;회사&quot;는 &quot;회원&quot;자격을 상실시킬 수 있습니다.</p>
      <p>⑧ &quot;회사&quot;가 &quot;회원&quot;자격을 상실시키는 경우에는 &quot;회원&quot;등록을 말소합니다. 이 경우 &quot;회원&quot;에게 이를 통지하고, &quot;회원&quot; 등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</p>
      <p>⑨ 회사는 다음 각 호의 방법으로 제1항의 해지의사를 통지할 수 있습니다. 해지의사 통지발송 전, 회원에게 당해 해지사유에 대한 의견진술의 기회를 부여할 수 있습니다.</p>
      <p>가. e-mail</p>
      <p>나. 전화</p>
      <p>다. 기타 회원이 회사에 등록한 연락처</p>
      <p>⑩ 본 조의 해지는 회사가 회원에게 해지의사 통지를 발송한 시점에서 효력을 발생합니다.</p>
      <p>⑪ &quot;회사&quot;는 사유가 있는 경우 해당 &quot;회원&quot;의 자격을 회복시킬 수 있습니다.</p>
      <p><strong>제 14조 (회사의 의무)</strong></p>
      <p>① &quot;회사&quot;는 법령과 이 약관이 금지하거나 공서 양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 &quot;재화 등&quot;을 제공하는데 최선을 다하여야 합니다.</p>
      <p>② &quot;회사&quot;는 &quot;회원&quot;가 안전하게 &quot;서비스&quot;를 이용할 수 있도록 &quot;회원&quot;의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.</p>
      <p>③ &quot;회사&quot;가 상품이나 용역에 대하여 「표시 &middot; 광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시 &middot; 광고행위를 함으로써 &quot;회원&quot;가 손해를 입은 때에는 이를 배상할 책임을 집니다.</p>
      <p>④ &quot;회사&quot;는 &quot;회원&quot;가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</p>
      <p><strong>제 15조 (회사의 개인정보 보호의무)</strong></p>
      <p>회사는 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계 법령이 정하는 바에 다라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 미 사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다. 다만, 회사의 사이트 이외의 링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.</p>
      <p><strong>제 16조 (회원의 권리 의무)</strong></p>
      <p>① 회원은 본 약관 및 관계법령에 따라 권리 및 의무를 가집니다.</p>
      <p>② 회원은 다음 각 호의 행위를 하여서는 안 됩니다.</p>
      <p>가. 신청 또는 변경시 허위 내용의 등록</p>
      <p>나. 타인의 정보 도용</p>
      <p>다. &lsquo;에코&rsquo;에 게시된 정보의 변경</p>
      <p>라. &quot;회사&quot;가 정한 정보 이외의 정보 등의 송신 또는 게시</p>
      <p>마. &quot;회사&quot; 기타 제3자의 저작권 등 지적재산권에 대한 침해</p>
      <p>바. &quot;회사&quot; 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
      <p>사. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서 양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</p>
      <p><strong>제 17조 (개인정보의 수집, 이용 등)</strong></p>
      <p>① &quot;회사&quot;는 &quot;회원&quot;의 개인정보 수집 시 &quot;서비스&quot;제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. &quot;회사&quot;가 &quot;회원&quot;에 대한 &quot;서비스&quot;제공을 위하여 필수적으로 수집하는 개인정보는 다음 각 호와 같습니다.</p>
      <p>② 본 조 제1항의 목적으로 수집, 이용할 수 있는 정보는 다음 각 호와 같습니다.</p>
      <p>가. 성명 혹은 닉네임</p>
      <p>나. &quot;회원&quot;의 소셜 계정(구글, 카카오) 고유ID</p>
      <p>다. 서비스 이용 기록, 접속 로그</p>
      <p>③ &quot;회사&quot;는 &quot;회원&quot;가입 시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.</p>
      <p>④ &quot;회사&quot;는 &quot;서비스&quot;의 원활한 제공 및 개인화 추천 알고리즘의 발전과 컨텐츠 반응을 통한 트렌드 분석의 목적으로 회원의 추가 개인정보를 수집, 이용할 수 있습니다. 단, 해당 정보를 회원이 직접 입력한 경우에 한합니다.</p>
      <p>⑤ &quot;회사&quot;는 &quot;회원&quot;의 개인정보를 수집 &middot; 이용하는 때에는 당해 &quot;회원&quot;에게 그 목적을 고지하고 동의를 받습니다.</p>
      <p>⑥ 회사가 본 조 제 1항에 관하여 회원의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 회원가입시의 본 이용약관을 통하여 당해 회원의 동의를 받습니다.</p>
      <p>⑦ &quot;회사&quot;는 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용 &middot; 제공단계에서 당해 &quot;회원&quot;에게 그 목적을 고지하고 동의를 받습니다. 다만, 다음 각 호의 경우에는 예외로 합니다.</p>
      <p>가. 배송업무상 배송업체에게 배송에 필요한 최소한의 &quot;회원&quot;의 정보(성명, 주소, 전화번호)를 알려주는 경우</p>
      <p>나. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우</p>
      <p>다. &quot;재화 등&quot;의 거래에 따른 대금정산을 위하여 필요한 경우</p>
      <p>라. 도용방지를 위하여 본인확인에 필요한 경우</p>
      <p>마. 국가기관의 적법한 절차에 의해 정보공개가 요구되는 경우</p>
      <p>바. 기타 관련 법령에 달리 정함이 있는 경우</p>
      <p>⑧ &quot;회사&quot;가 본 조에 따라 &quot;회원&quot;의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은 자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조 제1항이 규정한 사항을 미리 명시하거나 고지해야 하며 &quot;회원&quot;는 언제든지 이 동의를 철회할 수 있습니다.</p>
      <p>⑨ &quot;회원&quot;는 언제든지 &quot;회사&quot;가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 &quot;회사&quot;는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. &quot;회원&quot;가 오류의 정정을 요구한 경우에는 &quot;회사&quot;는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.</p>
      <p>⑩ &quot;회사&quot; 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.</p>
      <p>⑪ &quot;회사&quot;는 개인정보의 수집 &middot; 이용 &middot; 제공에 관한 동의란을 미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의 수집 &middot; 이용 &middot; 제공에 관한 &quot;회원&quot;의 동의 거절 시 제한되는 &quot;서비스&quot;를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집 &middot; 이용 &middot; 제공에 관한 &quot;회원&quot;의 동의 거절을 이유로 &quot;회원&quot;가입 등 서비스 제공을 제한하거나 거절하지 않습니다.</p>
      <p><strong>제 18조 (회사의 면책)</strong></p>
      <p>① 회사는 본 약관의 약관과 규칙을 벗어난 거래로 발생한 일체의 사고에 대해서 책임을 지지 않습니다.</p>
      <p>② &quot;회사&quot;는 천재지변, 불가항력 기타 &quot;회사&quot;의 합리적인 통제범위를 벗어난 사유로 인하여 &quot;서비스&quot;를 제공할 수 없는 경우에는 그에 대한 책임을 부담하지 않습니다.</p>
      <p>③ &quot;회사&quot;는 회원의 귀책사유로 인하여 &quot;서비스&quot;를 제공할 수 없는 경우에는 그에 대한 책임을 부담하지 않습니다.</p>
      <p>④ &quot;회사&quot;는 회원가 &quot;서비스&quot;를 이용함으로써 기대되는 수익을 얻지 못하거나 &quot;서비스&quot;를 통해 얻은 자료를 이용하여 발생한 손해에 대해서는 책임을 부담하지 않습니다.</p>
      <p>⑤ 회원가 화면에 게재한 정보,자료,사실 등의 내용에 관한 신뢰도 또는 정확성에 대하여는 해당 회원가 책임을 부담하며, &quot;회사&quot;는 내용의 부정확 또는 허위로 인해 회원 또는 제3자에게 발생한 손해에 대하여는 아무런 책임을 부담하지 않습니다.</p>
      <p>⑥ &quot;회사&quot;는 &quot;서비스&quot; 이용과 관련하여 회원의 고의 또는 과실로 인하여 회원 또는 제3자에게 발생한 손해에 대하여는 아무런 책임을 부담하지 않습니다.</p>
      <p>⑦ 구매자가 위법, 불법 또는 부당한 목적을 위해 서비스를 이용한다고 회사가 판단하는 때에는 회사는 관련 물품의 수취나 배송을 거절할 권리를 가집니다.</p>
      <p>⑧ 관할관청 또는 당국에 의해 회사에 의해 서비스되는 물품에 대해 제재를 받았을 때 회사는 해당물품을 관할관청 또는 당국에 인도하는 것을 원칙으로 합니다. 이로 인하여 구매자가 손해를 입었다고 할지라도 해당 손해에 대해서 회사는 일체의 책임을 지지 않으며 또한 구매자는 해당 물품에 대한 서비스 이용요금 및 관련비용 등의 지급의무를 면하지 아니합니다.</p>
      <p><strong>제 19조 (분쟁해결)</strong></p>
      <p>① &quot;회사&quot;는 &quot;회원&quot;로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 &quot;회원&quot;에게 그 사유와 처리일정을 즉시 통보합니다.</p>
      <p>② &quot;회사&quot;와 &quot;회원&quot; 간에 발생한 전자상거래 분쟁과 관련하여 &quot;회원&quot;의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시 &middot; 도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</p>
      <p>③ 회사와 회원간에 발생한 분쟁에 관한 소송은 회사의 주사무소 소재지를 관할하는 민사지방법원의 관할로 합니다.</p>
      <p>부칙 (시행일)</p>
      <p>본 약관은 2023년 5월 15일 부터 적용됩니다.</p>
    </div>
  );
};

export default AcoeService;
