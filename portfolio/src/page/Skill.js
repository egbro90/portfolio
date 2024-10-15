import React from "react";
import '../css/skill.scss';

const Skill = () => {
    return (
        <>
            <div className="inventory">
                <p>Skill Inventory</p>
                <table>
                    <thead>
                        <tr>
                            <th rowspan="2">업무명</th>
                            <th rowspan="2">참여기간</th>
                            <th rowspan="2">고객사</th>
                            <th rowspan="2">근무회사</th>
                            <th rowspan="2">역할</th>
                            <th colspan="7">개발환경</th>
                        </tr>
                        <tr>
                            <th>기종</th>
                            <th>OS</th>
                            <th>언어</th>
                            <th>DBMS</th>
                            <th>TOOL</th>
                            <th>통신</th>
                            <th>기타</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>대교</td>
                            <td>2019.04.19 - 2019.06.19</td>
                            <td>대교</td>
                            <td>디자인위브</td>
                            <td>PL</td>
                            <td>cafe24 쇼핑몰 기반</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>HIS</td>
                            <td>2022.04.19 - 2023.00.00</td>
                            <td>더존비즈온</td>
                            <td>더존비즈온</td>
                            <td>PG</td>
                            <td>React, Java</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p className="info-text">* 역할 : PM (프로젝트관리자), PL(중간관리자), PG(프로그래머), SM(시스템 운영 및 유지보수), SI(시스템 구축)</p>
                <p className="info-text">* 경력사항은 과거순부터 현재순으로 작성</p>
                <p>
                    <button>스킬 인벤토리.pdf 다운로드</button>
                </p>
            </div>
        </>
    )
}

export default Skill;