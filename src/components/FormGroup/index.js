import { Container } from './styles';

export default function FormGroup({icon, label, error, children}) {
  return (
    <Container $error={error}>
      <div id='labelContainer'>
      {
          icon === 'email' && (
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.9 0.399902H17.1C17.5971 0.399902 18 0.80285 18 1.2999V15.6999C18 16.197 17.5971 16.5999 17.1 16.5999H0.9C0.402948 16.5999 0 16.197 0 15.6999V1.2999C0 0.80285 0.402948 0.399902 0.9 0.399902ZM16.2 4.21403L9.06462 10.6041L1.8 4.19425V14.7999H16.2V4.21403ZM2.26031 2.1999L9.05571 8.1957L15.7509 2.1999H2.26031Z" fill="black"/>
            </svg>    
          )
        }

        {
          icon === 'password' && (
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'id' && (
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.63636 14.4091H16.3636V2.59095H1.63636V14.4091ZM0 1.77277C0 1.32091 0.366316 0.95459 0.818182 0.95459H17.1818C17.6337 0.95459 18 1.32091 18 1.77277V15.2273C18 15.6792 17.6337 16.0455 17.1818 16.0455H0.818182C0.366316 16.0455 0 15.6792 0 15.2273V1.77277ZM6.54545 6.86368C6.54545 6.41182 6.17914 6.0455 5.72727 6.0455C5.27541 6.0455 4.90909 6.41182 4.90909 6.86368C4.90909 7.31556 5.27541 7.68186 5.72727 7.68186C6.17914 7.68186 6.54545 7.31556 6.54545 6.86368ZM8.18182 6.86368C8.18182 8.21933 7.08288 9.31823 5.72727 9.31823C4.37167 9.31823 3.27273 8.21933 3.27273 6.86368C3.27273 5.50808 4.37167 4.40914 5.72727 4.40914C7.08288 4.40914 8.18182 5.50808 8.18182 6.86368ZM5.72874 11.7728C4.93775 11.7728 4.22296 12.0924 3.70385 12.6115L2.54677 11.4544C3.36022 10.641 4.48634 10.1364 5.72874 10.1364C6.97116 10.1364 8.0973 10.641 8.91074 11.4544L7.75366 12.6115C7.23454 12.0924 6.51975 11.7728 5.72874 11.7728ZM9.81812 6.68177H14.7272V5.04541H9.81812V6.68177ZM14.7272 9.13636H9.81812V7.5H14.7272V9.13636Z" fill="black"/>
            </svg>

          )
        }
        
        {
          icon === 'phone' && (
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.36556 8.1821C7.302 9.8288 8.6712 11.198 10.3179 12.1344L11.2024 10.8961C11.4965 10.4845 12.0516 10.3573 12.4956 10.5998C13.9024 11.3683 15.4571 11.8353 17.0789 11.9637C17.599 12.0049 18 12.4389 18 12.9606V17.4234C18 17.9361 17.6122 18.3657 17.1022 18.4181C16.5723 18.4726 16.0377 18.5 15.5 18.5C6.93959 18.5 0 11.5604 0 3C0 2.46227 0.0274201 1.92771 0.0818901 1.39776C0.1343 0.88775 0.56394 0.5 1.07665 0.5H5.53942C6.0611 0.5 6.49513 0.90104 6.5363 1.42109C6.66467 3.04288 7.1317 4.59764 7.9002 6.00444C8.1427 6.4484 8.0155 7.00354 7.6039 7.29757L6.36556 8.1821ZM3.84425 7.5252L5.7442 6.16809C5.20547 5.00514 4.83628 3.77183 4.64727 2.5H2.00907C2.00303 2.66632 2 2.833 2 3C2 10.4558 8.0442 16.5 15.5 16.5C15.667 16.5 15.8337 16.497 16 16.4909V13.8527C14.7282 13.6637 13.4949 13.2945 12.3319 12.7558L10.9748 14.6558C10.4258 14.4425 9.8956 14.1915 9.3874 13.9061L9.3293 13.873C7.3697 12.7587 5.74134 11.1303 4.627 9.1707L4.59394 9.1126C4.30849 8.6044 4.05754 8.0742 3.84425 7.5252Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'map' && (
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.8 4.67838V16.22L6.35828 14.2665L11.7583 16.9665L16.2 15.0629V3.52123L17.3727 3.01863C17.6012 2.92073 17.8657 3.02654 17.9636 3.25498C17.9876 3.311 18 3.37131 18 3.43225V16.2498L11.7 18.9498L6.3 16.2498L0.627264 18.681C0.398826 18.7789 0.134289 18.6731 0.0363871 18.4446C0.0123751 18.3887 0 18.3283 0 18.2673V5.4498L1.8 4.67838ZM12.8183 9.26814L9 13.0866L5.18162 9.26814C3.07279 7.15935 3.07279 3.74026 5.18162 1.63143C7.29045 -0.477403 10.7095 -0.477403 12.8183 1.63143C14.9272 3.74026 14.9272 7.15935 12.8183 9.26814ZM9 10.541L11.5456 7.99539C12.9514 6.5895 12.9514 4.31011 11.5456 2.90422C10.1397 1.49834 7.86033 1.49834 6.45441 2.90422C5.04853 4.31011 5.04853 6.5895 6.45441 7.99539L9 10.541Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'user' && (
            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18.5C0 14.7129 3.07005 11.6429 6.85714 11.6429C10.6443 11.6429 13.7143 14.7129 13.7143 18.5H12C12 15.6597 9.69746 13.3571 6.85714 13.3571C4.01682 13.3571 1.71429 15.6597 1.71429 18.5H0ZM6.85714 10.7857C4.01571 10.7857 1.71429 8.48429 1.71429 5.64286C1.71429 2.80143 4.01571 0.5 6.85714 0.5C9.69857 0.5 12 2.80143 12 5.64286C12 8.48429 9.69857 10.7857 6.85714 10.7857ZM6.85714 9.07143C8.75143 9.07143 10.2857 7.53714 10.2857 5.64286C10.2857 3.74857 8.75143 2.21429 6.85714 2.21429C4.96286 2.21429 3.42857 3.74857 3.42857 5.64286C3.42857 7.53714 4.96286 9.07143 6.85714 9.07143Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'medicine' && (
            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1962 1.13363L13.4462 6.7628C13.7223 7.24109 13.5584 7.85268 13.0801 8.12882L11.7806 8.87792L12.7811 10.6109L11.049 11.6109L10.0485 9.87792L8.75 10.6288C8.2717 10.9049 7.6601 10.7411 7.384 10.2628L5.5462 7.08032C3.49383 7.70302 2 9.60992 2 11.8657C2 12.491 2.1148 13.0895 2.32447 13.6413C3.0992 13.1497 4.01643 12.8657 5 12.8657C6.68408 12.8657 8.1737 13.6983 9.0797 14.9743L16.7681 10.5361L17.7681 12.2681L9.8898 16.8166C9.962 17.1549 10 17.5058 10 17.8657C10 18.2084 9.9655 18.543 9.8999 18.8663L18 18.8657V20.8657L1.00054 20.8669C0.3723 20.031 0 18.9918 0 17.8657C0 16.8584 0.29782 15.9208 0.81021 15.1359C0.29276 14.1605 0 13.0473 0 11.8657C0 8.87042 1.88131 6.31447 4.52677 5.31514L4.13397 4.63363C3.58169 3.67705 3.90944 2.45387 4.86603 1.90158L7.4641 0.401582C8.4207 -0.150701 9.6439 0.177052 10.1962 1.13363ZM5 14.8657C3.34315 14.8657 2 16.2088 2 17.8657C2 18.2163 2.06014 18.5528 2.17067 18.8656H7.8293C7.9399 18.5528 8 18.2163 8 17.8657C8 16.2088 6.65685 14.8657 5 14.8657ZM8.4641 2.13363L5.86602 3.63363L8.616 8.39677L11.2141 6.89677L8.4641 2.13363Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'ruler' && (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.32899 10.7516L1.99348 13.0872L4.91286 16.0065L16.0065 4.91286L13.0871 1.99348L11.3355 3.74511L12.5032 4.91286L11.3355 6.08061L10.1678 4.91286L8.41615 6.66449L10.1678 8.41611L9.00002 9.58385L7.24837 7.83224L5.49674 9.58385L6.66449 10.7516L5.49674 11.9194L4.32899 10.7516ZM13.671 0.241847L17.7582 4.32899C18.0806 4.65146 18.0806 5.17427 17.7582 5.49674L5.49674 17.7581C5.17428 18.0807 4.65145 18.0807 4.32899 17.7581L0.241853 13.671C-0.0806177 13.3486 -0.0806177 12.8257 0.241853 12.5033L12.5032 0.241847C12.8257 -0.0806156 13.3485 -0.0806156 13.671 0.241847Z" fill="black"/>
            </svg>

          )
        }

        {
          icon === 'room' && (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 17.4965V15.6965L1.8 15.6963V2.9476C1.8 2.51265 2.11106 2.13993 2.53901 2.06211L11.0634 0.51222C11.3568 0.458877 11.638 0.653493 11.6913 0.946912C11.6971 0.97879 11.7 1.01112 11.7 1.04351V2.19632L15.3 2.19648C15.7971 2.19648 16.2 2.59942 16.2 3.09649V15.6963L18 15.6965V17.4965H14.4V3.99649L11.7 3.99633V17.4965H0ZM9.89998 2.55326L3.60001 3.69872V15.6965H9.89998V2.55326ZM8.99998 8.49648V10.2965H7.20002V8.49648H8.99998Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'bathroom' && (
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.48821 0.503979C0.961155 0.748857 0.623431 1.28279 0.623431 1.87118C0.623431 2.32197 0.786271 2.68897 1.11455 2.9784C1.942 3.70771 3.2212 3.34388 3.52755 2.29214C3.80721 1.33192 3.09494 0.380906 2.09901 0.384777C1.88704 0.385603 1.63863 0.434096 1.48821 0.503979ZM13.6212 0.450091C12.5981 0.692874 11.682 1.40409 11.2211 2.31327C10.932 2.8837 10.8421 3.29793 10.796 4.27109L10.7546 5.14384H11.9688H13.183L13.1834 4.52498C13.1838 3.76178 13.2555 3.49069 13.5401 3.17523C14.0886 2.56729 15.0935 2.70084 15.4655 3.43122C15.5834 3.66251 15.5917 3.80717 15.5917 5.61735V7.55581L8.38151 7.55619C3.36522 7.55638 1.09414 7.57764 0.917735 7.62588C0.563024 7.72287 0.259085 7.97143 0.119888 8.27838C0.0146027 8.51057 0.0012281 8.71342 2.37516e-05 10.1023C-0.00143414 11.7562 0.0637907 12.3785 0.315309 13.1097C0.736703 14.3346 1.55851 15.4176 2.60946 16.1326L2.97007 16.378L2.34007 17.9306C1.9936 18.7845 1.71007 19.5129 1.71007 19.5494C1.71007 19.5933 2.15422 19.6156 3.02578 19.6156H4.3415L4.80352 18.3938L5.26555 17.1719H9.00206H12.7385L12.9578 17.7432C13.0784 18.0574 13.2862 18.6001 13.4195 18.9492L13.662 19.5839L14.9755 19.601C16.0308 19.6148 16.289 19.6017 16.289 19.5343C16.289 19.4882 16.018 18.7866 15.6868 17.9753C15.3556 17.1639 15.0858 16.4657 15.0874 16.4235C15.0889 16.3813 15.2926 16.204 15.5399 16.0294C16.1186 15.6212 16.746 14.9379 17.1372 14.29C17.4782 13.7251 17.8319 12.7641 17.9337 12.1258C17.9742 11.8719 17.9997 10.1383 17.9999 7.61674C18.0005 3.08059 18.0077 3.17238 17.584 2.30356C17.1685 1.45131 16.2681 0.734766 15.2974 0.483985C14.8834 0.377034 14.004 0.359261 13.6212 0.450091ZM6.10352 3.49006C5.78608 3.63439 5.47669 4.03548 5.41901 4.37741C5.28818 5.15273 5.97992 5.86229 6.76198 5.75496C7.6847 5.62827 8.12448 4.51705 7.52319 3.83135C7.13717 3.39104 6.60351 3.26276 6.10352 3.49006ZM15.5908 10.8088C15.5897 11.797 15.493 12.2822 15.177 12.8843C14.7701 13.6599 13.9959 14.3143 13.1317 14.6132L12.7076 14.76H8.99953H5.29141L4.86735 14.6132C3.716 14.2149 2.80704 13.2227 2.50379 12.0332C2.44123 11.7878 2.40732 11.3584 2.40732 10.8113V9.96777H8.99953H15.5917L15.5908 10.8088Z" fill="black"/>
            </svg>
          )
        }

        {
          icon === 'calendar' && (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.18928 2.48968V0.775391H6.90356V2.48968H12.0464V0.775391H13.7607V2.48968H17.1893C17.6627 2.48968 18.0464 2.87344 18.0464 3.34682V7.63253H16.3321V4.20396H13.7607V5.91825H12.0464V4.20396H6.90356V5.91825H5.18928V4.20396H2.61785V16.204H7.76071V17.9182H1.76071C1.28732 17.9182 0.903564 17.5345 0.903564 17.0611V3.34682C0.903564 2.87344 1.28732 2.48968 1.76071 2.48968H5.18928ZM13.7607 10.204C11.8672 10.204 10.3321 11.739 10.3321 13.6325C10.3321 15.526 11.8672 17.0611 13.7607 17.0611C15.6542 17.0611 17.1893 15.526 17.1893 13.6325C17.1893 11.739 15.6542 10.204 13.7607 10.204ZM8.61785 13.6325C8.61785 10.7922 10.9204 8.48968 13.7607 8.48968C16.601 8.48968 18.9036 10.7922 18.9036 13.6325C18.9036 16.4728 16.601 18.7754 13.7607 18.7754C10.9204 18.7754 8.61785 16.4728 8.61785 13.6325ZM12.9036 11.0611V13.9876L14.8689 15.9529L16.0811 14.7407L14.6179 13.2775V11.0611H12.9036Z" fill="black"/>
            </svg>

          )
        }

        {
          icon === 'tools' && (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.32504 0.5582C3.55813 0.11982 4.98791 0.39411 5.97488 1.38108C7.0958 2.50199 7.2975 4.19403 6.57992 5.52047L17.2886 16.2303L15.8744 17.6445L5.16543 6.93537C3.83887 7.65352 2.1463 7.45202 1.02513 6.33083C0.0378759 5.34358 -0.236294 3.91327 0.202616 2.67994L2.43935 4.91662C3.02513 5.5024 3.97488 5.5024 4.56067 4.91662C5.14645 4.33083 5.14645 3.38108 4.56067 2.7953L2.32504 0.5582ZM12.6924 2.44174L15.8744 0.67398L17.2886 2.08819L15.5208 5.27017L13.7531 5.62372L11.6317 7.74502L10.2175 6.33083L12.3388 4.20951L12.6924 2.44174ZM5.97488 10.5734L7.3891 11.9877L2.08579 17.291C1.69527 17.6815 1.0621 17.6815 0.671576 17.291C0.308946 16.9283 0.283046 16.3565 0.593866 15.964L0.671576 15.8768L5.97488 10.5734Z" fill="black"/>
            </svg>

          )
        }

        {/* <label>{label}</label> */}
        <label>
          { error ? error : label }
        </label>
      </div>
      {children}
    </Container>
  );
}